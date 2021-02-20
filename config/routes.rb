Rails.application.routes.draw do
  devise_for :users
  root 'posts#index'
  get 'f/:title', to: 'origins#show'
  resource :post
end
