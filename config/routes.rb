Nate::Application.routes.draw do
  resources :biblebooks

  root to: "home#index"
end
