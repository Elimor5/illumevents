import React from 'react';
import Modal from 'react-modal'
import SessionForm from './session_form'
import { ModalStyle } from './modal_style'

class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      formType: props.formType
    };

    window.SessionOpenModal = () => {
      this.setState({ openModal: true });
    };
    window.SessionOpenModal = window.SessionOpenModal.bind(this); //window has SessionOpenModal???
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }

  openModal() {
    this.setState({ openModal: true })
  }

  closeModal() {
    this.setState({ openModal: false })
  }

  render() {
    return (
      <div id="modal">
        <button className="session-button" onClick={this.openModal}>
          {this.props.formType}
        </button>

        <Modal
          isOpen={this.state.openModal}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          contentLabel="Session Modal"
          className="session-form-container">




          <SessionForm
            formtype={ this.state.formType }
            processForm={ this.props.processForm }
            formType={this.props.formType}
            errors={ this.props.errors }
            loggedIn={ this.props.loggedIn }/>

        </Modal>
      </div>
    );
  }
}

export default SessionModal;
