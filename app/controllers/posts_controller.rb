class PostsController < ApplicationController
  def index
    @posts = Post.all.order(created_at: :desc)
  end
  def show
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
