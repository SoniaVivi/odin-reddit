Rails.application.routes.draw do
  devise_for :users
  root 'posts#index'
  get 'f/:title', to: 'origins#show'
  get 'f/:origin_title/:id', to: 'posts#show'
  resource :post
end
