class VotesController < ApplicationController
  def index
  end
  def create
    new_vote = Vote.new(ajax_params.merge({user_id: current_user.id}))
    if new_vote.save
      render json: {success: true}
    else
      render json: {success: false}
    end
  end
  def destroy
    delete_params = ajax_params
    vote = Vote.where(
                      "user_id = ? AND
                      voteable_id = ? AND
                      voteable_type = ? AND
                      vote_type = ?",
                      current_user.id,
                      delete_params[:voteable_id],
                      delete_params[:voteable_type],
                      delete_params[:vote_type])[0]
    render json: {success: false} if vote.nil?
    return if vote.nil?
    if (Vote.where("user_id = ? AND voteable_id = ? AND voteable_type = ?
                    AND vote_type = ?",
                current_user.id,
                delete_params[:voteable_id],
                delete_params[:voteable_type],
                delete_params[:vote_type])[0].destroy)
      render json: {success: true}
    else
      render json: {success: false}
    end
  end

  private

  def ajax_params
    params.permit(:voteable_type, :voteable_id, :vote_type)
  end
end
