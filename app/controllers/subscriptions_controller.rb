class SubscriptionsController < ApplicationController
  def create
    origin = Origin.find_by("title = ?", create_destroy_params[:origin_title])
    if current_user.subscriptions.where("origin_id = ?", origin.id).exists?
      return render json: {success: false}
    end
    if Subscription.create(subscriber_id: current_user.id, origin_id: origin.id)
      render json: {success: true}
    else
      render json: {success: false}
    end
  end
  def destroy
    origin = Origin.find_by("title = ?", create_destroy_params[:origin_title])
    subscription =
                current_user.subscriptions.find_by("origin_id = ?", origin.id)
    return render json: {success: false} if subscription.nil?
    if subscription.delete
      render json: {success: true}
    else
      render json: {success: false}
    end
  end

  private

  def create_destroy_params
    params.permit(:origin_title)
  end
end
