import React from 'react';
import Map from '../map/map';
import { connect } from 'react-redux';
import { updateFilter, Errors, clearFilterErrors } from '../../actions/filter_actions';
import { retriveLocationFromAddress } from '../../util/google_maps_api_util';
import SubCategory from './sub_category';
import merge from 'lodash/merge';

class BrowseEventsSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      lat: 40.7831,
      lng: -73.9712,
      searchByCity: false,
      subCategoriesOpen: {
        "category": false,
        "date": false,
        "price": false
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearField = this.clearField.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.resetSearchByCity = this.resetSearchByCity.bind(this);
    this.setAutoComplete = this.setAutoComplete.bind(this);
    this.toggleSubCategories = this.toggleSubCategories.bind(this);
  }

  componentDidMount() {
    this.setAutoComplete();
  }


  handleChange() {
    return(e) => {
      this.setState({ city: e.target.value});
    };
  }

  clearField() {
    this.inputCity.value = "";
    this.setState({city: ""});
  }

  handleKeyPress(event) {
      retriveLocationFromAddress(this, this.state.city, this.props.updateFilterErrors);
      this.setState({ searchByCity: true });
      this.props.clearFilterErrors();
  }

  resetSearchByCity() {
    this.setState({ searchByCity: false });
  }

  getLocation() {
    this.setState({ searchByCity: true });

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = (pos) => {
      const crd = pos.coords;

      this.setState({
        lat: crd.latitude,
        lng: crd.longitude
      });

      $.ajax({
        method: 'GET',
        url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${crd.latitude},${crd.longitude}&key=${window.googleMapsKey}`
      }).then((data) => {

        const city = data.results[0].address_components[2].long_name;
        const state = data.results[0].address_components[5].long_name;

        this.inputCity.value = `${city}, ${state}`;
      });
    };

    const error = (err) => {
      this.setState({
        lat: 40.7831,
        lng: -73.9712
      });
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  setAutoComplete() {
    const input = this.inputCity;
    const autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', () => {
      const data = autocomplete.getPlace();
      if (data.geometry) {
        const lat = data.geometry.location.lat();
        const lng = data.geometry.location.lng();
        this.setState({ lat, lng });
        this.inputCity.value = data.formatted_address;
      } else {
        this.handleKeyPress(data.name);
      }
    });
  }

  toggleSubCategories(e) {
    const subCategory = e.currentTarget.title;
    const toggled = {[subCategory]: !this.state.subCategoriesOpen[subCategory]};
    const nextState = merge({}, this.state.subCategoriesOpen, toggled);
    this.setState({ subCategoriesOpen: nextState });
  }

  renderSubCategory(subCategory) {
    const upperCase = subCategory.toUpperCase();
    const bottomUnderline = subCategory === "price" ? "remove-bottom-underline" : "";

    return(
      <div key={subCategory} className={`${bottomUnderline} subcategory-bottom-background`} >
        <button
          onClick={this.toggleSubCategories}
          title={subCategory}
          className="category-button"
          >
          <h1 className="category-button-text">{upperCase}</h1>
          {this.state.subCategoriesOpen[subCategory] ?
            <i className="category-button-text angle fa fa-angle-up" aria-hidden="true"></i> :
            <i className="category-button-text angle fa fa-angle-down" aria-hidden="true"></i>
            }
          </button>
          {this.state.subCategoriesOpen[subCategory] ?
            <SubCategory subCategory={subCategory} /> :
            null}
      </div>
    );
  }

  // setLatLng() {
  //   if (this.props.coordinates) {
  //     const { lat, lng } = this.props.coordinates;
  //     this.setState({ lat, lng });
  //     console.log(this.state);
  //   }
  // }

  render() {
    const { updateFilter, lat, lng } = this.props;
    const subCategories = Object.keys(this.state.subCategoriesOpen);

    return(
      <div className="categories-google-maps-browse">
        <Map
          style="browse-events-map-container"
          zoom ={9}
          lat={this.state.lat}
          lng={this.state.lng}
          searchByCity={this.state.searchByCity}
          resetSearchByCity={this.resetSearchByCity}
         />
        <div className="browse-event-search-bar-container">
          <button onClick={this.getLocation}>
            <i className="fa fa-map-marker fa-map-marker-search-bar" aria-hidden="true"></i>
          </button>
          <input
            value={this.state.city}
            type= 'text'
            className='browse-event-city-select'
            ref={el => this.inputCity = el}
            onChange={this.handleChange()}
            onClick={this.clearField}
            />
        </div>
          <div className="category-buttons">
              {subCategories.map((subCategory) =>(
                this.renderSubCategory(subCategory)
              ))}
          </div>
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => {
    return {
      coordinates: filters.coordinates,
    };
};


const mapDispatchtoProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateFilterErrors: (error) => dispatch(updateFilterErrors(error)),
  clearFilterErrors: () => dispatch(clearFilterErrors),
});

export default connect(mapStateToProps, mapDispatchtoProps)(BrowseEventsSidebar);
