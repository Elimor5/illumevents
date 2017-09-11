import React from 'react';
import Map from '../map/map';
import { connect } from 'react-redux';
import { updateCity, updateFilterErrors, clearFilterErrors } from '../../actions/filter_actions';
import { retriveLocationFromAddress } from '../../util/google_maps_api_util';

export const categories = [
  "Auto, Boat & Air",
  "Business & Professional",
  "Charity & Causes",
  "Community & Culture",
  "Family & Education",
  "Fashion & Beauty",
  "Film",
  "Media & Entertainment",
  "Food & Drink",
  "Goverment & Politics",
  "Health & Wellness",
  "Hobbies & Special Interest",
  "Home & Lifestyle",
  "Music",
  "Other",
  "Performing & Visual Arts",
  "Religion & Spirituality",
  "Science & Technology",
  "Seasonal & Holiday",
  "Sports & Fitness",
  "Travel & Outdoor" ];

class CategoriesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      lat: 40.7831,
      lng: -73.9712
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clearField = this.clearField.bind(this);
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
      this.props.clearFilterErrors();
      // return $.ajax({
      //   method: 'get',
      //   url: `https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.filters.city}&key=${window.googleMapsKey}`
      // }).then(data => {
      //     const latLong = data.results[0].geometry.location;
      //     const lat = Math.round(latLong.lat * 10000) / 10000;
      //     const lng = Math.round(latLong.lng * 10000) / 10000;
      //
      //     this.setState({
      //       lat,
      //       lng
      //     });
      // });
    }
  }

  render() {
    const { updateFilter } = this.props;
    return(
      <div className="categories-google-maps-browse">
        <Map
          style="browse-events-map-container"
          zoom ={9}
          lat={this.state.lat}
          lng={this.state.lng} />
        <input
          value={this.props.filters}
          type= 'text'
          ref={el => this.inputCity = el}
          onChange={this.handleChange()}
          onKeyPress={this.handleKeyPress}
          onClick={this.clearField}
          />

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

export default connect(mapStateToProps, mapDispatchtoProps)(CategoriesTable);
