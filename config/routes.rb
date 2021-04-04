Rails.application.routes.draw do
  root 'posts#index'
  devise_for :users, controllers: {
    sessions: 'users/sessions', registrations: 'users/registrations'
  }
  devise_scope :user do
    get 'signup', to: 'devise/registrations#new'
  end
  post 'users/check_username', to: 'users#check_username'
  get 'f/:title', to: 'origins#show', as: 'origin'
  get 'f/:title/submit', to: 'posts#new'
  post 'f/:title/submit', to: 'posts#create'
  get 'f/:title/:id', to: 'posts#show', as: 'post'
  delete '/post', to: 'posts#destroy'
  resource :comment
  resource :vote, only: [:index, :create, :destroy]
end
