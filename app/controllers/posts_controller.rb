require 'date'

class PostsController < ApplicationController
  def index
    posts = Post.all.order(created_at: :desc)
    @posts = []
    posts.each { |post| @posts << post.get_data }
  end
  def show
    post = Post.find(params[:id])
    @post = get_post_data(post)
    @comments = post.comments.where(parent_id: nil).map  do |comment|
      comment.get_tree(user_signed_in? ? current_user.id : nil)
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
end
