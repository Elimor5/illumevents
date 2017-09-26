import React from 'react';

class PaginationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentResults: []
    };
  }

  render() {
    return(
      <div>
        <button> <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
