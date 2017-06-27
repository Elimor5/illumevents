export const fetchAllEventTickets = (event_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/events/${event_id}/event_tickets`
  });
};


// export const fetchSingleEventTicket = (ticket_id) => {
//   return $.ajax({
//     method: 'GET',
//     uurl: `api/event_tickets/${ticket_id}`,
//   });
// };
//
// export const createEventTicket = eventTicket => {
//  return $.ajax({
//     method: 'POST',
//     url: `api/event_tickets`,
//     data: { eventTicket }
//   });
// };

export const updateEventTicket = eventTicket => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/event_tickets/${eventTicket.id}`,
      data: { eventTicket }
    }
  ));
};

export const deleteEventTicket = eventTicket => (
  $.ajax({
    method: 'DELETE',
    url: `api/event_tickets/${eventTicket.id}`
  })
);
