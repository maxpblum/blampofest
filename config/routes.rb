Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api do
    resources :responses, only: [:create, :index]
  end

  get "/admin", to: "static_pages#admin"
end
