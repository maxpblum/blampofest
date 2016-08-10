Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api do
    resources :responses, only: [:create, :index]
  end
end
