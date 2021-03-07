require 'date'

class PostsController < ApplicationController
  def index
    posts = Post.all.order(created_at: :desc)
    @posts = []
    posts.each { |post| @posts << post.get_data }
  end
  def show
    @post = Post.find(params[:id]).get_data
  end
  def new
  end
  def create
  end
  def edit
  end
  def update
  end
end
