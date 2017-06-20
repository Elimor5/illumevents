React Component Hierarchy:

* NavBarContainer
  * NavBar
    * NavBarItem
    * SearchBarContainer
      * SearchBar

* HomepageContainer
  * Homepage
    * Splash
    * CategoryBoxContainer
      * CategoryBox
        * CategoryBoxItem
    * EventsByCategoryContainer
      * EventsByCategory
        * EventsByCategoryItem
    * SearchBoxContainer   
      * SearchBox (bonus)

* AuthFormContainer
  * AuthForm
    * AuthFormItem
  * AuthFormErrorsContainer
    * AuthFormErrors

* DropdownContainer
  * Dropdown
    * DropdownItem

* Footer

  * EventShowContainer
    * EventsShow
      * EventShowHeaderContainer
        * EventsShowHeader
      * EventsShowDetailContainer   
        * EventsShowContainer
          * EventShowDetail
            * EventShowDetailItem
      * EventShowGoogleMap (bonus)
      * CategoryBoxContainer
        * CategoryBox
          * CategoryBoxItem
    * CheckoutModalContainer
      * CheckoutModal
        * CheckoutModalItem

* NewEventContainer
  * NewEvent
    * NewEventInfoContainer
        * NewEventInfo
          * NewEventInfoItem
    * CreateTicketsContainer
      * CreateTickets
        * CreateTicketsItem

* ResultsContainer
  * Results (For both Searching & Browsing)
    * ResultsEventsContainer
      * ResultsEvents
        * ResultsEventsItem
    * EventsFilterBoxContainer     
      * EventsFilterBox  
        * EventsFilterBoxItem
      * ResultsGoogleMap


  * UserDashBoardContainer
    * UserDashBoard
      * UserDashBoardNavBox
        * UserDashBoardNavBoxItem
      * UserEvents
        * UserEventsItem


* Routes
  * "/" - HomepageContainer
  * "/sign-up" - AuthFormContainer
  * "/log-in" - AuthFormContainer
  * "new-event" - NewEventContainer
  * "homepage/events/:eventId" - EventsShowContainer
  * "/browse/search/:query" - ResultsContainer
  * "/browse" - ResultsContainer
  * "user/tickets" - UserDashBoardContainer
  * "user/bookmarks" - UserDashBoardContainer
  * "user/hosted-events" - UserDashBoardContainer
