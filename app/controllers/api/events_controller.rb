class Api::EventsController < ApplicationController

  def index
    debugger
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])

    @user = @event.host
  end

  def create

    @event = current_user.events.new(event_params)
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
      :description,
      :category,
      event_tickets_attributes: [:max_quantity, :price, :ticket_type]
    )
  end
end
