import { connect } from 'react-redux';
import React from 'react';
import { fetchUserInfo } from '../../actions/user_actions';


  class UserDashboard extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.fetchUserInfo(this.props.userId);
    }

    render() {
      if (this.props.user.id) {
        return(
          <h1>test</h1>
        );

      } else {
        return null;
      }
    }

  }


  const mapStateToProps = ({users, session, errors },ownProps) => {
    return {
      userId: session.currentUser.id,
      user: users
    };
  };

  const mapDispatchToProps = dispatch => ({
    fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
