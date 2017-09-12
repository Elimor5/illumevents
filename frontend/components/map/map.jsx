import React from 'react';
import { connect } from 'react-redux';
import { allEvents} from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';
import HomepageEventItem from '../events/homepage_event_item'

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: "",
      markers: [],
      overlay: false,
      counter: 0,
      bounds: ""
    };
    this.setMarker = this.setMarker.bind(this);
    this.retriveLocation = this.retriveLocation.bind(this);
    this.eventMarkers = this.eventMarkers.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  componentDidMount() {
    this.retriveLocation();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.style === "browse-events-map-container") {
      if (this.state.markers.length !== 0) {this.state.markers.forEach(marker => marker.setMap(null));}
      this.eventMarkers(nextProps.events, this.state.map);


      if ((nextProps.lat !== this.props.lat && nextProps.lng !== this.props.lng) && nextProps.searchByCity) {
        this.setState({
          counter: 0,
          overlay: false
         });
        this.state.map.setCenter({
          lat: nextProps.lat,
          lng: nextProps.lng,
        });
        this.props.resetSearchByCity();
      }

    }
  }

  retriveLocation() {
    const { lat, lng } = this.props;

   const mapOptions = {
     center: { lat, lng },
     zoom: this.props.zoom,
     gestureHandling: 'auto',
     fullscreenControl: false,
     mapTypeControl: false,
   };

   this.map = new google.maps.Map(this.mapNode, mapOptions);
   this.setState({ map: this.map });

   if (this.props.style === "event-show-map-container") {
     this.setMarker(lat,lng, this.map);
   }

   if (this.props.style === "browse-events-map-container") {
     this.map.addListener('idle', () => {
       const mapBounds = this.map.getBounds();
       const bounds = {
         NE: { lng: mapBounds.b.f, lat: mapBounds.f.f },
         SW: { lng: mapBounds.b.b, lat: mapBounds.f.b}
       }

       if (this.state.counter < 1 ) {
         this.props.updateFilter("bounds", bounds);
         this.setState({ counter: 1});
       } else if (this.state.counter >= 1 && !this.props.searchByCity) {
         this.setState({ bounds, overlay: true });
       }
     });
   }
  }

  eventMarkers(events, map) {
    events.map((event) => {
      this.setMarker(event.lat, event.lng, map, event);
    });
  }

  toggleOverlay() {
    this.props.updateFilter("bounds",this.state.bounds)
    this.setState({ overlay: false });
  }

  setMarker(lat,lng, map, event) {
    const position = new google.maps.LatLng(lat, lng);
    const marker = new google.maps.Marker({
      position,
      map,
      // animation: google.maps.Animation.DROP
    });

    if (this.props.style === "browse-events-map-container") {
      const contentString = '<div id="infowindow-content">'+
      '<div id="infowindow-image-holder">'+
      `<img class="infowindow-image" src=${event.image_url}>`+
      '</div>' + '<div id="map-placeholder">' + '</div>' +
        `<h1 id="infowindow-event-title">${event.title}</h1>`+
      '</div>'
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        disableAutoPan: true,
        closeBoxURL: "",
      });

      this.state.markers.push(marker);

      marker.addListener('mouseover',() => {
        infowindow.open(map, marker)
      });

      marker.addListener('click', () => {
        this.props.history.push(`events/${event.id}`);
      });

      marker.addListener('mouseout',() => {
        infowindow.close();
      });

    }
  }

  render() {
    return(
      <div className="map-container">
        <div id={this.props.style} ref={ map => this.mapNode = map }></div>
        <button className={this.state.overlay ? "map-overlay-search" : "map-overlay-hidden" } onClick={this.toggleOverlay}> Search this area</button>
    </div>
    );
  }
}

  const mapStateToProps = ({ events }) => {
    return ({
      events: allEvents(events)
    });
  };

  const mapDispatchtoProps = (dispatch) => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  });

  export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Map));
