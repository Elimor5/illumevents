class Api::TicketPurchasesController < ApplicationController

  def create
    ticket_purchase_params.each do |ticket_purchase|
      new_ticket = current_user.ticket_purchases.new(ticket_purchase)
      unless new_ticket.save
        render json: new_ticket.errors.full_messages
      end
    end

      render json: "Tickets Purchased", status: 200
  end

  private

  def ticket_purchase_params
    params.require(:ticket_purchases)
  end
end
