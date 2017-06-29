Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:show, :create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :events, only: [:index, :create, :show, :update, :destroy]
    resources :ticket_purchases, only: [:create]
    resources :bookmarks, only: [:index, :create, :show]
  end

  root to: "static_pages#root"
end
