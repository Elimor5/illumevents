class Api::TicketPurchasesController < ApplicationController

  def create
    JSON.parse(ticket_purchase_params).each do |ticket_purchase|
      new_ticket_purchase = current_user.ticket_purchases.new(ticket_purchase)
      unless new_ticket_purchase.save
        render json: new_ticket.errors.full_messages
      end
      # ticket = new_ticket_purchase.ticket
      # ticket.update({max_quantity: ticket.max_quantity - ticket_purchase.purchase_quantity })
    end

      render json: ["Tickets Purchased"], status: 200
  end

  private

  def ticket_purchase_params
    params.require(:ticket_purchases)
  end
end
