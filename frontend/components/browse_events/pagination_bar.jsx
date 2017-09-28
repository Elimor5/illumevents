import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';

class PaginationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagesArray: [],
      lastPage: "",
      selected: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ lastPage: Math.ceil(nextProps.count / 15), selected: nextProps.currentPage});
    this.generatePagesArray(nextProps.count, nextProps.currentPage);
  }

  generatePagesArray(count, currentPage) {
    let numOfPages = Math.ceil(count / 15);
    const pagesArray = [currentPage];
    currentPage = parseInt(currentPage);
    let left = currentPage;
    let right = currentPage;
    while ( pagesArray.length < 6 && ( left > 1 || right < numOfPages )  ) {
      left--;
      right++;
      if (left > 1) pagesArray.unshift(left);
      if (right < numOfPages) pagesArray.push(right);
    }
    //
    // const last = numOfPages <= 7 ? numOfPages : currentPage + 2;
    // const first = currentPage;
    // debugger
    // for (let i = first; i < last; i++) {
    //   pagesArray.push(i);
    // }
    this.setState({ pagesArray });
  }

  nextPage() {
    const next = parseInt(this.props.currentPage) + 1;
    if (next > this.state.lastPage) return;
    this.props.updateFilter("page", next);
  }

  prevPage() {
    const prev = parseInt(this.props.currentPage) - 1;
    if (prev < 1) return;
    this.props.updateFilter("page", prev);
  }

  handleClick(e) {
    this.props.updateFilter("page", e.target.innerHTML);
  }

  render() {
    const { pagesArray, lastPage, selected } = this.state;
    const { currentPage } = this.props;

    return(
      <div>
        <button onClick={this.prevPage}>
          <i className={`${parseInt(currentPage) - 1 < 1 ?
                          "gray-arrow" :
                           ""} pagination-arrow fa fa-angle-left`}
             aria-hidden="true">
          </i>
        </button>
        <button className={`${currentPage == 1 ?
                              "hide-custom-date-range" :
                              ""} pagination-nav-button`} onClick={this.handleClick}>1</button>
                            <button className={currentPage == 1 ? "hide-custom-date-range" : "" }>...</button>
        {pagesArray.map((pageNum) => (
          <button className={`${currentPage == pageNum ?
                                "selected-" :
                                ""}pagination-nav-button` }
                  key={ pageNum } onClick={this.handleClick}>{pageNum}</button>
        ))}
          <button className={selected == lastPage ?
                            "hide-custom-date-range" :
                             "" }>...
          </button>
          <button className={`${selected == lastPage ?
                                "hide-custom-date-range" :
                                ""} pagination-nav-button`}
                   onClick={this.handleClick}>{lastPage}</button>
          <button onClick={this.nextPage}>
          <i className={`${parseInt(currentPage) + 1 > lastPage ?
                          "gray-arrow" :
                          ""} pagination-arrow fa fa-angle-right`}
             aria-hidden="true">
          </i>
        </button>
      </div>
    );
  }
}


const mapStateToProps = (nextProps) => {
  return ({
    currentPage: nextProps.filters.page,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationBar);
