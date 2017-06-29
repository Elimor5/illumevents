class Api::UsersController < ApplicationController

  def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end

    def show
      @user = User.find(params[:id])

      if @user && current_user.id == @user.id
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

end
