import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: ""
    };
    this.setMarker = this.setMarker.bind(this);
  }

  componentDidMount() {
    this.retriveLocation();
  }

  retriveLocation() {
    const apiKey = window.googleMapsKey;
    const address = this.props.address.concat(" ",this.props.cityStateZip).split(" ").join("_");

    $.ajax({
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
    })
    .then(data => {
     const latLong = data.results[0].geometry.location;
     const lat = Math.round(latLong.lat * 10000) / 10000;
     const lng = Math.round(latLong.lng * 10000) / 10000;

     const mapOptions = {
       center: { lat, lng },
       zoom: 16,
       gestureHandling: 'greedy'
     };
     this.map = new google.maps.Map(this.mapNode, mapOptions);
     this.setMarker(lat,lng, this.map);
   }, err => {
     alert("Could not retrieve location");
   });
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
