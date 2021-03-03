class OriginsController < ApplicationController
  def show
    @posts = []
    Origin.find_by("title = ?", params[:title])
          .posts
          .order(created_at: :desc)
          .each do |post|
            @posts << post.get_data
    end
  end
end
