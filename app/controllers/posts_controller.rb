require 'date'

class PostsController < ApplicationController
  def index
    posts = Post.all.order(created_at: :desc)
    @posts = []
    posts.each do |post|
      @posts << post.get_data(user_signed_in? ? current_user.id : nil)
    end
  end
  def show
    post = Post.find(params[:id])
    @sort = sort_params('top', 'old')
    @post = get_post_data(post)
    @comments = post.comments
                    .where(parent_id: nil)
                    .order(comment_sort(@sort)).map  do |comment|
      comment.get_tree(user_signed_in? ? current_user.id : nil,
                       comment_sort(@sort))
    end
  end
  def new
    @origin_name = Origin.find_by("title = ?", params[:title]).title
  end
  def create
    return render json: {success: false} if !user_signed_in?
    post_params = create_params
    origin = Origin.find_by('title = ?', post_params[:title]);
    return render json: {success: false} if origin.nil?
    subject = create_subject(post_params)

    post = Post.new(title: post_params[:post_title],
                    poster_id: current_user.id,
                    origin_id: origin.id,
                    subject_type: post_params[:post_type],
                    subject_id: subject.id
                  )
    if post.save
      render json: {post: post_path(title: origin.title, id: post.id)}
    else
      render json: {success: false}
    end
  end
  def edit
  end
  def update
    post_params = update_params
    post = Post.find(update_params[:id])
    if (!post.nil? &&
      user_signed_in? &&
      post.poster.id == current_user.id &&
      post.subject.update(description: post_params[:body]))
        render json: {success: true}
    else
      render json: {success: false}
    end
  end
  def destroy
    post = Post.find(destroy_params[:id])
    if ((post.poster.id == current_user.id ||
          post.origin.moderators.exists?(current_user.id)) && post.destroy)
      render json: {success: true}
    else
      render json: {success: false}
    end
  end

  private

  def create_params
    params.permit(:post_title, :title, :post_type, :description, :url)
  end
  def destroy_params
    params.permit(:id)
  end
  def create_subject(subject_params)
    case subject_params[:post_type]
    when 'Text'
      Text.create(description: subject_params[:description])
    when 'Link'
      Link.create(url: subject_params[:url])
    else
      nil
    end
  end
  def update_params
    params.permit(:id, :body)
  end
  def comment_sort(order)
    case order
    when 'old'
      {created_at: :asc}
    when 'new'
      {created_at: :desc}
    else
      {score: :desc}
    end
  end
end
