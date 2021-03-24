require 'date'

class PostsController < ApplicationController
  def index
    posts = Post.all.order(created_at: :desc)
    @posts = []
    posts.each { |post| @posts << post.get_data }
  end
  def show
    post = Post.find(params[:id])
    @post = post.get_data
    @comments = post.comments.where(parent_id: nil).map  do |comment|
      comment.get_tree
    end
  end
  def new
    @origin_name = Origin.find_by("title = ?", params[:title]).title
  end
  def create
  end
  def edit
  end
  def update
  end
end
