class CommentsController < ApplicationController
  def create
    new_comment = Comment.new(create_params.merge({poster_id: current_user.id}))
    if new_comment.save
      return render json: {success: true}
    else
      return render json: {success: false}
    end
  end
  def update
    return render json: {success: false} if !user_signed_in?
    comment_data = update_params
    comment = Comment.find(comment_data[:comment_id])
    if (!user_signed_in? ||
        comment.nil? ||
        current_user.id != comment.poster_id)
      return render json: {success: false}
    end
    if comment.update(body: comment_data[:body])
      render json: {success: true}
    else
      render json: {success: false}
    end
  end

  private

  def create_params
    params.permit(:parent_id, :post_id, :body)
  end
  def update_params
    params.permit(:comment_id, :body)
  end
end
