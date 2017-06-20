```json
{
  currentUser: {
    id: 1,
    username: "Sample User"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createEvent: {errors: ["body can't be blank"]}
  },
  events: {
    1: {
      title: "Pearl Jam at MSG",
      description: "Amazing Rock band plays at MSG",
      host_id: 1,
      category_id: 1,
      date: "2017-06-18",
      time: "18:25:43",
      ticket_quantity: 100,
      ticket_price: 50,
      ticket_id: 1,
      bookmark_id: 1,
      venue: "Madison Square Garden",
      address: "4 Pennsylvania Plaza",
      city_state_zip: "New York, NY, 10001",
      image: "event image url"
    }
  },
  tickets: {
    1: {
      event_id: 1,
      guest_id: 1
    }
  },
  categories {
    1: {
      name: "Concert"
    }
  },
  bookmarks: {
    1: {
      event_id: 1,
      user_id: 1
    }
  }
}
```
