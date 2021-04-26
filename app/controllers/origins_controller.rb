require 'date'

class OriginsController < ApplicationController
  def index
    @rankings = Origin.all
                     .map {|o| o.get_rank}
                     .sort {|a, b| b[:count] <=> a[:count]}
  end
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
    @url = origin.url
    @subscribed = (user_signed_in? &&
      current_user.subscribed_origins.where("title = ?", params[:title]).exists?)
    @posts = []
    sort = sort_params('hot', 'hot')
    post_sort(origin, sort).each {|post| @posts << get_post_data(post)}
  end

  private

  def create_params
    params.permit(:title, :description, :nsfw, :community_type)
  end
  def post_sort(origin, order)
    case order
    when 'new'
      origin.posts.order(created_at: :desc).limit(25)
    when 'top'
      origin.posts.order(score: :desc).limit(25)
    else
      hot_sort(origin)
    end
  end
  def hot_sort(origin)
    posts = nil
    upper_limit = DateTime.now
    lower_limit = upper_limit - 1
    total_posts = origin.posts.count
    return origin.posts if total_posts == 0

    while (posts.nil? || (posts.length <= 25 && posts.length < total_posts)) do
      posts_search = -> {origin.posts
                              .where("created_at <= ? AND created_at >= ?",
                                upper_limit, lower_limit)
                              .order(score: :desc)}
      posts = posts.nil? ? posts_search.call :  posts + posts_search.call
      lower_limit -= 1
      upper_limit -= 1
    end
    posts
  end
end
