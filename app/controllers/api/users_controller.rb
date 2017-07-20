class Api::UsersController < ApplicationController

  def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
  end

  def show
    @user = User.find(params[:id])

    if @user && current_user.id == @user.id
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show2
    @user = User.includes(:bookmarks).find(params[:id])
    @bookmarked_event_ids = []

    @user.bookmarks.each do |bookmark|
      @bookmarked_event_ids << bookmark.event_id
    end

    if @user && current_user.id == @user.id
      render :show2
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

end
