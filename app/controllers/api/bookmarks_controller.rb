class Api::BookmarksController < ApplicationController

  def create
    if logged_in?
      @bookmark = current_user.bookmarks.new()
      @event = Event.find(params[:event_id])
      @bookmark.event = @event
      @user = current_user

      if @bookmark.save
        @bookmarked_event_ids = []

        @user.bookmarks.each do |bookmark|
          @bookmarked_event_ids << bookmark.event_id
        end
        render '/api/users/show2'
      else
        render json: @bookmark.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    render json: ["Must be logged in to delete a bookmark"] unless logged_in?
    @bookmark = current_user.bookmarks.find_by(event_id: params[:event_id])
    if @bookmark
      @bookmark.destroy
      render json: @bookmark.event.id
    else
      render json: @bookmark.errors.full_messages
    end
  end
end
