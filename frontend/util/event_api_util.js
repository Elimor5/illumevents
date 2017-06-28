export const fetchAllEvents = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/events'
  });
};


export const fetchSingleEvent = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/events/${id}`,
  });
};

export const createEvent = event => {
 return $.ajax({
    method: 'POST',
    url: '/api/events',
    data: { event }
  });

};

export const updateEvent = event => {
  debugger
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/events/${event.id}`,
      data: { event }
    }
  ));
};

export const deleteEvent = event => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${event.id}`
  })
);

export const purchaseTickets = (ticket_purchases) => (
  $.ajax({
    method: 'POST',
    url: 'api/ticket_purchases',
    data: {ticket_purchases: JSON.stringify(ticket_purchases)}
  })
);
