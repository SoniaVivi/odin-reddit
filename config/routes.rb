Rails.application.routes.draw do
  root 'posts#index'
  get '/user/:name', to: 'users#show', as: 'user'
  devise_for :users, controllers: {
    sessions: 'users/sessions', registrations: 'users/registrations'
  }
  devise_scope :user do
    get 'signup', to: 'devise/registrations#new'
  end
  post 'users/check_username', to: 'users#check_username'
  get 'f/:title', to: 'origins#show', as: 'origin'
  get '/origins/create', to: 'origins#new'
  post '/origins/create', to: 'origins#create'
  get '/origins/leaderboard/', to: 'origins#index'
  get 'f/:title/submit', to: 'posts#new'
  post 'f/:title/submit', to: 'posts#create'
  get 'f/:title/:id', to: 'posts#show', as: 'post'
  delete '/post', to: 'posts#destroy'
  put '/post', to: 'posts#update'
  resource :comment
  resource :vote, only: [:index, :create, :destroy]
  resource :subscription, only: [:create, :destroy]
end
