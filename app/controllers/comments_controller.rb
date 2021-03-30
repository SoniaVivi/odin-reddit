class CommentsController < ApplicationController
  def create
    new_comment = Comment.new(create_params.merge({poster_id: current_user.id}))
    if new_comment.save
      return render json: {success: true}
    else
      return render json: {success: false}
    end
  end

  private

  def create_params
    params.permit(:parent_id, :post_id, :body)
  end
end
