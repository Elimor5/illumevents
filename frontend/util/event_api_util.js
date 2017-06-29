export const fetchAllEvents = (category) => {
  return $.ajax({
    method: 'GET',
    url: 'api/events',
    data: { category }
  });
};


export const fetchSingleEvent = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/events/${id}`,
  });
};

export const createEvent = (formData) => {
 return $.ajax({
    url: '/api/events',
    method: 'POST',
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData,
  });
};

export const updateEvent = event => {

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
