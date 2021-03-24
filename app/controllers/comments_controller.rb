class CommentsController < ApplicationController
  def create
    new_comment = Comment.new(create_params)
    if new_comment.save
      return render json: {success: true}
    else
      return render json: {success: false}
    end
  end

  private

  def create_params
    params.permit(:poster_id, :parent_id, :post_id, :body)
  end
end
