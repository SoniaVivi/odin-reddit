class OriginsController < ApplicationController
  def show
    origin = Origin.find_by("title = ?", params[:title].downcase)
    @posts = []
    origin.posts
          .order(created_at: :desc)
          .each do |post|
            @posts << post.get_data
    end
  end
end
