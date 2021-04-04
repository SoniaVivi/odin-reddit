class Link < ApplicationRecord
  def get_data
    { url: url }
  end
end
