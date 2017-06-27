Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:show, :create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :events, only: [:index, :create, :show, :update, :destroy]
    resources :event_tickets, only: [:show,:create, :update, :destroy]

  end

  root to: "static_pages#root"
end
