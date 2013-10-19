Nate::Application.routes.draw do
  resources :teachings

  resources :biblebooks

  root to: "home#index"
end
