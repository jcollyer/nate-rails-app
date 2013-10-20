Nate::Application.routes.draw do
  get "sessions/new"
  root to: "home#index"

  resources :biblebooks
  resources :teachings

  #all for authentication ########

  get "log_out" => "sessions#destroy", :as => "log_out"
  get "log_in" => "sessions#new", :as => "log_in"
  get "sign_up" => "users#new", :as => "sign_up"

  resources :users
  resources :sessions

  #################################
end
