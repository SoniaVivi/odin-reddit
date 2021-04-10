class UsersController < ApplicationController
  def show
    if (params[:name].downcase == 'me' && user_signed_in? )
      return redirect_to current_user.to_param
    end
    @user = User.find(User.where(User.arel_table[:name].matches(params[:name]))
                          .ids.first)
    @comments = @user.comment_previews(user_signed_in? ? current_user.id : nil)
    @posts = @user.post_previews(false, user_signed_in? ? current_user.id : nil)
    @overview = @comments.merge(
            @user.post_previews(true, user_signed_in? ? current_user.id : nil))
    @sidebar = {name: @user.name,
                created_at: @user.created_at.strftime('%FT%H:%M:%S')}
  end
  def check_username
    exists = User.exists?(name: check_username_params['username'])
    render json: { exists: exists}
  end

  private

  def check_username_params
    params.permit(:username)
  end
end
