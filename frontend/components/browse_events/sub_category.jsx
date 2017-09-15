import { categories, dates, prices } from './categories_detail';
import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';

class SubCategory extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: null,
      subCategory: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.selectSubcategoryType();
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
    const subCategory = categories[0] === e.target.innerText ? "" : e.target.innerText;
    this.props.updateFilter(this.props.subCategory, subCategory);
    this.setState({ clicked: e.target.innerText});
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
