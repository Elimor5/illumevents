class Api::BookmarksController < ApplicationController
  def index
    @boookmarks = current_user.bookmarks
  end

  def show
    @bookmark = current_user.bookmarks.find_by(id: paramas(:event_id))
  end

  def create
    if logged_in?
      @bookmark = current_user.bookmarks.new(bookmark_params)
      @event = Event.find_by(id: params[:event_id])
      if @bookmark.save
        render :show
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

private

  def bookmark_params
    params.require(:bookmark).permit(:event_id)
  end
end
