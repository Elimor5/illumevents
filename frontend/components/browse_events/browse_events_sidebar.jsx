import React from 'react';
import Map from '../map/map';
import { connect } from 'react-redux';
import { updateCity, updateFilterErrors, clearFilterErrors } from '../../actions/filter_actions';
import { retriveLocationFromAddress } from '../../util/google_maps_api_util';
import { categories } from './categories'

class BrowseEventsSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      lat: 40.7831,
      lng: -73.9712,
      searchByCity: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clearField = this.clearField.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.resetSearchByCity = this.resetSearchByCity.bind(this);
  }

  handleChange(e) {
    return(e) => {
      this.setState({ city: e.target.value})
    };
  }

  clearField() {
    this.inputCity.value = "";
    this.setState({city: ""});
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      retriveLocationFromAddress(this, this.state.city, this.props.updateFilterErrors);
      this.setState({ searchByCity: true })
      this.props.clearFilterErrors();
    }
  }

  resetSearchByCity() {
    this.setState({ searchByCity: false });
  }

  getLocation() {
    this.setState({ searchByCity: true })
    this.setState({
      lat: 40.7831,
      lng: -73.9712
    })
  }

  render() {
    const { updateFilter } = this.props;
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
            value={this.props.filters}
            type= 'text'
            className='browse-event-city-select'
            ref={el => this.inputCity = el}
            onChange={this.handleChange()}
            onKeyPress={this.handleKeyPress}
            onClick={this.clearField}
            />
        </div>

        <h1 className="categories-header"> Categories </h1>
        <button className="category-button" onClick={() => updateFilter("category", "")}><li className="browse-category-list">All Categories</li></button>
          {categories.map((category)=>(
            <button key={category} className="category-button" onClick={() => updateFilter("category", category)}><li className="browse-category-list">{category}</li></button>
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => {
  return {
    city: filters["city"],
  };
};

const mapDispatchtoProps = dispatch => ({
  updateCity: (value) => dispatch(updateCity(value)),
  updateFilterErrors: (error) => dispatch(updateFilterErrors(error)),
  clearFilterErrors: () => dispatch(clearFilterErrors),
});

export default connect(mapStateToProps, mapDispatchtoProps)(BrowseEventsSidebar);
