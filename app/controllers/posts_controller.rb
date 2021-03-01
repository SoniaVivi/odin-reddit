require 'date'

class PostsController < ApplicationController
  def index
    posts = Post.all.order(created_at: :desc)
    @posts = []
    posts.each do |post|
      @posts <<
      {created_at: post.created_at.strftime("%FT%T"),
      description: post.description,
      origin: post.origin.title,
      poster: post.poster.name,
      score: post.score,
      subject_id: post.subject_id,
      post_type: post.subject_type,
      title: post.title,
      edited: post.updated_at}
    end
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
