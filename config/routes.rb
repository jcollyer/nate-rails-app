Nate::Application.routes.draw do
  root to: "home#index"

  resources :biblebooks
  resources :teachings
  resources :users
  resources :sessions

  #all for authentication ########

  get "log_out"  => "sessions#destroy", :as => "log_out"
  get "log_in"   => "sessions#new",     :as => "log_in"
  get "sign_up"  => "users#new",        :as => "sign_up"

  #################################
end
