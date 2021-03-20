Rails.application.routes.draw do
  root 'posts#index'
  devise_for :users, controllers: {
    sessions: 'users/sessions', registrations: 'users/registrations'
  }
  devise_scope :user do
    get 'signup', to: 'devise/registrations#new'
  end
  post 'users/check_username', to: 'users#check_username'
  get 'f/:title', to: 'origins#show'
  get 'f/:origin_title/:id', to: 'posts#show'
  resource :post
end
