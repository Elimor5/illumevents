class Api::EventsController < ApplicationController

  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      render: show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = event.find(params[:id])
    @event.destroy
    render: show
  end

  def update
    @event = current_user.events.find(params[:id])
    if @event.update_attributes(event_params)
      render: show
    else
      render json: @event.errors.full_messages, status 422
    end
  end

  private

  def event_params
    params.require(:event).permit(
      :host_id,
      :title,
      :venue,
      :address,
      :city_state_zip,
      :date,
      :time,
      :description,
      :ticket_price,
      :ticket_quantity
    )
  end
end
