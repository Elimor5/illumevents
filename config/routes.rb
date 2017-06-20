Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:show, :create, :update]
    resource :session, only: [:create, :destroy, :show]
  end

  root to: "static_pages#root"
end
