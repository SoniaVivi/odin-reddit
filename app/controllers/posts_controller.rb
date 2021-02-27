class PostsController < ApplicationController
  def index
    @posts = (Post.select(:title, :description, :score, :subject_id,
                          :created_at, :updated_at, :origin_id)
                 .order(created_at: :desc))
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
