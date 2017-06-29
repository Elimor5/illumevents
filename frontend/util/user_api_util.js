export const fetchUserInfo = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/user/show2/${id}`,
  });
};

export const createBookmark = (eventId) => {
  return $.ajax({
    method: "POST",
    url: `/api/events/${eventId}/bookmarks`,
    data: { event_id },
  });
};

export const deleteBookmark = (eventId, bookmarkId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/events/${eventId}/bookmarks/${bookmarkId}`
  });

};
