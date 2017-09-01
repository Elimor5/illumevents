import React from 'react';
import { connect } from 'react-redux';
import { allEvents} from '../../reducers/selectors';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: "",
      markers: [],
    };
    this.setMarker = this.setMarker.bind(this);
    this.retriveLocation = this.retriveLocation.bind(this);
    this.eventMarkers = this.eventMarkers.bind(this);
  }

  componentDidMount() {
    this.retriveLocation();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.style === "browse-events-map-container") {
      if (this.state.markers.length !== 0) {this.state.markers.forEach(marker => marker.setMap(null));}
      this.eventMarkers(nextProps.events, this.state.map);
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
  }

  eventMarkers(events, map) {
    events.map((event) => {
      this.setMarker(event.lat, event.lng, map, event);
    });
  }

  removeMarkers() {

  }

  setMarker(lat,lng, map, event) {
    const position = new google.maps.LatLng(lat, lng);
    const marker = new google.maps.Marker({
      position,
      map,
      animation: google.maps.Animation.DROP
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
      });

      this.state.markers.push(marker);
      marker.addListener('mouseover',() =>{
        infowindow.open(map, marker)
      });

      marker.addListener('mouseout', function() {
        infowindow.close();
      });
    }


  }

  render() {
    return(
      <div id={this.props.style} ref={ map => this.mapNode = map }></div>
    );
  }
}

  const mapStateToProps = ({ events }) => {
    return ({
      events: allEvents(events)
    });
  }

  export default connect(mapStateToProps)(Map);
