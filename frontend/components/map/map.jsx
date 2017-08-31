import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.setMarker = this.setMarker.bind(this);
    this.retriveLocation = this.retriveLocation.bind(this);
  }

  componentDidMount() {
    this.retriveLocation();
  }

  retriveLocation() {
    const { id } = this.props;
    const { lat, lng } = this.props;

   const mapOptions = {
     center: { lat, lng },
     zoom: 16,
     gestureHandling: 'auto'
   };

   this.map = new google.maps.Map(this.mapNode, mapOptions);
   this.setMarker(lat,lng, this.map);
  }

  setMarker(lat,lng, map) {
    const position = new google.maps.LatLng(lat, lng);
    new google.maps.Marker({
      position,
      map,
      animation: google.maps.Animation.DROP
    });

  }

  render() {
    return(
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}

export default Map;
