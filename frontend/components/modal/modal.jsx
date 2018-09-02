import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal_actions';


class Modal extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div onClick={this.props.hideModal} className={`${this.props.visible ? "modal-screen-visible" : "modal-screen-hidden" }`}>
        <div className="modal-contents" onClick={e => e.stopPropagation()}>
          {this.props.content}
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ modals }) => ({
  visible: modals.visible,
  content: modals.content
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
