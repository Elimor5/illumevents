class Api::BookmarksController < ApplicationController

  def create
    if logged_in?
      @bookmark = current_user.bookmarks.new(bookmark_params)
      @event = Event.find(params[:event_id])
      @user = current_user
      if @bookmark.save
        render '/api/users/show2'
      else
        render json: @bookmark.errors.full_messages, status 422
      end
    else
      render json: ["Must be logged in to make a bookmark"], status 422
    end
  end

  def destroy
    render json: ["Must be logged in to delete a bookmark"] unless logged_in?
    @bookmark = current_user.bookmarks.where(event_id: params[:event_id])
    if @bookmark
      @bookmark.destroy
      render :show
    else
      render json: @bookmark.errors.full_messages
    end
  end
end
