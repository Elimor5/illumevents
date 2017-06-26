class Api::EventsController < ApplicationController

  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])

    @user = @event.host
  end

  def create
    @event = Event.new(event_params)
    @event.host = current_user
    @user = @event.host
    if @event.save
      render :show
    else
      render json:  @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = current_user
    @event = current_user.events.find(params[:id])
    @event.destroy
    render :show
  end

  def update
    @event = current_user.events.find(params[:id])
    if @event.update_attributes(event_params)
       @user = current_user
       render :show
    else
      render json:  @event.errors.full_messages, status: 422
    end
  end

  private

  def event_params
    params.require(:event).permit(
      :title,
      :venue,
      :address,
      :city_state_zip,
      :date,
      :time,
      :description
    )
  end
end
