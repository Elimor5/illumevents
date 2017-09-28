class Api::EventsController < ApplicationController

  def index
    filters = params[:filters]

    if filters
      @events =  filters[:bounds] ? Event.in_bounds(filters[:bounds]) : Event.all
      @events = filters[:category] != "" ? @events.where(category: filters[:category]) : @events
      @events = filters[:price] != "" ?
        filters[:price] == "Free" ?
          @events.joins(:event_tickets).where(event_tickets: {price: 0}) :
           @events.joins(:event_tickets).where.not(event_tickets: {price: 0}) :
            @events
      @events = filters[:date] != "" ? @events.filter_by_date(filters[:date]) : @events
      @page_results = @events.limit(15).offset((filters[:page].to_i - 1) * 15)
    else
      @events = Event.where(:id => 1..9)
      @page_results = @events
    end

    @count = @events.count

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
    @event.event_tickets.destroy_all
    @event.bookmarks.destroy_all
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
      :image,
      :lat,
      :lng
    )
    event_params[:event_tickets_attributes] = event_tickets_attributes[:tickets]
    event_params

  end

end
