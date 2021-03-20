class UsersController < ApplicationController
  def check_username
    exists = User.exists?(name: check_username_params['username'])
    render json: { exists: exists}
  end

  private

  def check_username_params
    params.permit(:username)
  end
end
