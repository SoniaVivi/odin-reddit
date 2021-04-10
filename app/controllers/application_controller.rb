class ApplicationController < ActionController::Base
  helper_method :get_post_data

  def get_post_data(post)
    return post.get_data if current_user.nil?
    id = current_user.id
    post_data = post.get_data(id)
    post_data.merge(
              {
                isPoster: post.poster.name == current_user.name,
                isModerator: ModeratorOrigin.exists?(moderator_id: id,
                                                     origin_id: post.origin.id)
              })
  end
end
