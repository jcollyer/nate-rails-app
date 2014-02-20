Nate::Application.routes.draw do




  root to: "home#index"

  resources :biblebooks
  resources :teachings
  resources :users
  resources :sessions
  resources :bios
  resources :abouts
  resources :books
  resources :notes do
    resources :links
  end

  ### All for authentication ###
  get "log_out"  => "sessions#destroy", :as => "log_out"
  get "log_in"   => "sessions#new",     :as => "log_in"
  get "sign_up"  => "users#new",        :as => "sign_up"
  ##############################

end
