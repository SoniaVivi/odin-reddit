require 'date'

class PostsController < ApplicationController
  def index
    posts = Post.all.order(created_at: :desc)
    @posts = []
    posts.each { |post| @posts << post.get_data }
  end
  def show
    id = current_user ? current_user.id : nil
    post = Post.find(params[:id])
    @post = post.get_data(id )
    @comments = post.comments.where(parent_id: nil).map  do |comment|
      comment.get_tree(id)
    end
  end
  def new
    @origin_name = Origin.find_by("title = ?", params[:title]).title
  end
  def create
    if user_signed_in?
      post_params = create_params
      origin = Origin.find_by('title = ?', post_params[:title]);
      return render json: {success: false} if origin.nil?

      post = Post.new(title: post_params[:post_title],
                      description: post_params[:description],
                      poster_id: current_user.id,
                      origin_id: origin.id)
      if post.save
        render json: {post: post_path(title: origin.title, id: post.id)}
      else
        render json: {success: false}
      end
    else
      render json: {success: false}
    end
  end
  def edit
  end
  def update
  end

  private

  def create_params
    params.permit(:post_title, :title, :description)
  end
end
