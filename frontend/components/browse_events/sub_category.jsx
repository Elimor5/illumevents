import { categories, dates, prices } from './categories_detail';
import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';

class SubCategory extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: null,
      subCategory: null,
      startDate: "",
      endDate: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.selectSubcategoryType();
  }

  componentDidMount() {
  }

  getDate() {
    const date = new Date().toJSON().slice(0,10);
    this.setState({ startDate: date, endDate: date });

  }

  selectSubcategoryType() {
    switch (this.props.subCategory) {
      case "category":
        this.setState({ subCategory: categories, clicked: categories[0] });
        break;
      case "date":
        this.setState({ subCategory: dates, clicked: dates[0] });
        break;
      case "price":
        this.setState({ subCategory: prices, clicked: prices[0] });
        break;
    }
  }

  handleClick(e) {
    const subCategory = this.state.subCategory[0] === e.target.innerText ? "" : e.target.innerText;
    if (subCategory !== "Custom Date") {
      this.props.updateFilter(this.props.subCategory, subCategory);
      window.scrollTo(0, 0);
    }
    this.setState({ clicked: e.target.innerText});
  }

  handleChange(property) {
    return(e) => {
      this.setState({
        [property]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const customDateRange = this.state.startDate.concat("_", this.state.endDate);
    this.props.updateFilter("date", customDateRange);
    window.scrollTo(0, 0);
  }

  render() {
    const { updateFilter } = this.props;
    return(
      <div className="list-item-container">
        {this.state.subCategory.map((category)=>(
          <li key={category} className='browse-category-list-item'>
            <button className={`subcategory-link ${this.state.clicked === category ? "subcategory-selected" : ""}`} onClick={this.handleClick} >{category} </button>
          </li>
        ))}
        {this.props.subCategory === "date" ?
        <div className={`${this.state.clicked === "Custom Date" ? "" : "hide-custom-date-range"} custom-date-range-container`}>
            <label className="custom-date-label"> Start Date</label>
            <input
              value={this.state.startDate}
              placeholder="test"
              type="date"
              onChange={this.handleChange("startDate")}
              className="custom-date-input"
              />
            <label className="custom-date-label"> End Date</label>
            <input
              value={this.state.endDate}
              placeholder={this.state.endDate}
              type="date"
              onChange={this.handleChange("endDate")}
              className="custom-date-input"
              />
            <button className="custom-date-submit" onClick={this.handleSubmit}> UPDATE</button>
        </div> :
        null}
      </div>
    );
  }
}

const mapStateToProps = ({ filters }, ownProps) => {
 return{
   filters,
   subCategory: ownProps.subCategory,
 };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SubCategory);
