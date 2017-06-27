class Api::EventTicketsController < ApplicationController

    def index
      @event_tickets = EventTicket.where(event_id: params[:event_id])
      render json: @event_tickets
    end

    def create
      @event_ticket = EventTicket.new(event_ticket_params)
      @event_ticket.event = Event.all.last

      if @event_ticket.save
        render :show
      else

        render json: @event_ticket.errors.full_messages, status 422
      end
    end

    def show
      @event_ticket = EventTicket.find(params[:id])
    end

    def update
      @event_ticket = EventTicket.find(params[:id])
      @user = @event_ticket.event.host

      if current_user == @user
        @event_ticket.update_attributes(event_ticket_params)
        render :show
      else
        render json: @event_ticket.errors.full_messages, status 422
      end
    end

    def destroy
      @user = @event_ticket.event.host
      @event_ticket = EventTicket.find(params[:id])

      if current_user == @user
        @event_ticket.destroy
      #  status 204: no content - implies success
      # redirect to event show page?
      head :no_content
      render
      end
    end

    def event_ticket_params
      params.require(:event_ticket).permit(:type, :price, :max_quantity)
    end
end
