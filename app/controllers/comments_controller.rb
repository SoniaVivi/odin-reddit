class CommentsController < ApplicationController
  def create
    puts '---------------------------', create_params, '---------------------------'
  end

  private

  def create_params
    params.permit(:poster_id, :parent_id, :post_id, :body)
  end
end
