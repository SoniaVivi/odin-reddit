class OriginsController < ApplicationController
  def new
  end
  def create
    return render json: {success: false} if !user_signed_in?
    origin_params = create_params.merge({creator_id: current_user.id})
    origin_params[:nsfw] = (origin_params[:nsfw] == 'true' ? true : false)
    origin = Origin.new(origin_params)
    if origin.save
      render json: {origin: origin_path(title: origin.title)}
    else
      render json: {success: false}
    end
  end
  def show
    origin = Origin.find_by("title = ?", params[:title].downcase)
    @posts = []
    origin.posts
          .order(created_at: :desc)
          .each do |post|
            @posts << get_post_data(post)
    end
  end

  private

  def create_params
    params.permit(:title, :description, :nsfw, :community_type)
  end
end
