# Illumevents

Heroku Link: [link]

Trello Link: [trello_link]
[trello_link]: https://trello.com/b/cInq0Wn4

# Minimum Viable Product
  Illumevents is a web application inspired by Eventbrite built using Ruby on Rails on the backend and React/Redux on the frontend. This website will allow users to browse events, bookmark events, create new events, buy tickets for events and sell tickets for events. By the end of week 9, the following features will be implemented with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

  - Hosting on Heroku
  - New account creation, login and guest/demo login
  - Events
  - Registration
  - Categories  
  - Bookmark events
  - Bonus: Google Maps integration
  - Bonus: Search (autocomplete)
  - Bonus: Infinite Scroll
  - Bonus: Ticket Quantity (Quantity Remaining)

  Design Docs:
  * [View Wireframes][wireframes]
  * [React Components][components]
  * [API endpoints][api-endpoints]
  * [DB schema][schema]
  * [Sample State][sample-state]

  [wireframes]: ./Wireframes/
  [components]: ./react_component_hierarchy.md
  [sample-state]: ./sample_state.md
  [api-endpoints]: ./api-endpoints.md
  [schema]: ./schema.md



  Feature Implementation Timeline:

  * Phase 1: Backend setup & Frontend User Auth Setup (2 days)
  * Phase 2: Events (2 days)
    * Users can create events
      * Events can be created, deleted or edited through the API
          * Drag and drop functionality for uploading images to events
      * Events have many tickets
    * Users can browse events
      * Users can bookmark/unbookmark events through the API
  * Phase 3: Tickets (1 Day)    
    * Users "register" to events by "purchasing" tickets for events
    * Limit quantity of tickets available
    * Purchased tickets appear on User Dashboard under "Purchased Tickets"

  * Phase 4: Categories (2 Days)
    * Users can specify which category their event falls under when creating a new event
    * Users can browse/search for events by category

  * Phase 5: Bookmarking Events (1 Day)
    * Users can bookmark events that they have not already purchased
    * Events can be bookmarked or unbookmarked from anywhere on the site (Search, Browse, Saved Events)
    * Bookmarked events appear/disappear from Saved Events tab of User Dashboard upon toggling bookmark icon

  * Bonus Features (TBD)
    * Infinite Scroll
      * Scrolling a certain distance on the page leads to a background AJAX call to fetch more events
    * Google Maps
      * Interactive map showing the event's location on the event showpage
      * Interactive map showing multiple events on search results page
    * Search
      * Autocomplete search feature allows users to search for events by category or by event name
    * Event Suggestions
      * Based on # of clicks per day and User's category history
