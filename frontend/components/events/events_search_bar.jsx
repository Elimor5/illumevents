import React from 'react';
import { connect } from 'react-redux';
import { updateFilter} from '../../actions/filter_actions';
import { dates } from '../browse_events/categories_detail';
import { retriveLocationFromAddress } from '../../util/google_maps_api_util';
import { withRouter } from 'react-router-dom';


class EventsSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      date: "All Dates",
      location: "New York, NY",
      lat: "",
      lng: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setAutoComplete();
  }

  handleChange(property) {
    return(e) => {
      this.setState({ [property]: e.target.value});
    };
  }

  handleClick() {
    // this.updateDateFilter();
    if (this.state.lat === "") {
      this.updateLocationFilter()
      .then(() => {
        this.updateDateFilter();

      })
      .then(() => {
        this.props.history.push("/browse");
      });
    } else {
      this.updateLocationFilter();
      this.updateDateFilter();
      this.props.history.push();
    }

    // this.props.history.push("/browse");

    // this.props.updateFilter("city", this.state.location);
  }

  updateDateFilter() {
    const date = this.state.date === "All Dates" ? "" : this.state.date;
    this.props.updateFilter("date", date);
  }

  updateLocationFilter() {
    const context = this;

    if (this.state.lat === "") {
    return retriveLocationFromAddress(this, this.state.location, "")
      .then((data) => {

        let { lat, lng } = context.state;
        this.props.updateFilter("coordinates", { lat, lng });
      });
    } else {
        let { lat, lng } = this.state;
        this.props.updateFilter("coordinates", {lat, lng });
    }
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
      }
    });
  }

  render() {
    return(
      <div className="homepage-search-bar-container-outer">
        <div className="homepage-search-bar-container-inner">
          <div className="homepage-search-bar-banner-container">
            <h2 className="homepage-search-bar-banner">
              Find your next experience
            </h2>
          </div>
          <div className="homepage-search-bar-bars-container">
            <input
              placeholder="Search events or categories"
              className="homepage-search-bar-input">
            </input>

            <input
              className="homepage-search-bar-input"
              onChange={this.handleChange("location")}
              ref={el => this.inputCity = el}
              value={this.state.location}
              >
            </input>

          <select
              className="homepage-search-bar-input"
              onChange={this.handleChange("date")}
              value={this.state.date}
              placeholder="All Dates">
              {dates.slice(0,8).map((date) => (
                <option key={date} value={date}>{date}</option>
              ))}
          </select>

              <button onClick={this.handleClick} className="homepage-search-bar-button">SEARCH</button>

          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default withRouter(connect(null, mapDispatchToProps)(EventsSearchBar));
