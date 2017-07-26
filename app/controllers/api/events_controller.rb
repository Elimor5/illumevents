class Api::EventsController < ApplicationController

  def index
    if params[:category]
      @events = Event.where(category: params[:category])
    else
      @events = Event.all
    end
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
    render json: ["event deleted"]
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

    event_tickets_attributes = ActionController::Parameters.new(
      tickets: JSON.parse(params[:event][:event_tickets_attributes])
    ).permit(tickets: [:ticket_type, :max_quantity, :price])

    event_params = params.require(:event).permit(
      :title,
      :venue,
      :address,
      :city_state_zip,
      :date,
      :time,
      :description,
      :category,
      :image
    )
    event_params[:event_tickets_attributes] = event_tickets_attributes[:tickets]
    event_params

  end

  # def event_ticket_params
  #   .permit(
  #   )
  # end
end
