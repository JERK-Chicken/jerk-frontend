import React from "react";
import LoginModal from "./login-modal";

class LoginButton extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};
  }

  updateModal = (modalState) => {
    this.setState({modalIsOpen: modalState});
  }; 
  
  render() {
    return (
      <div>
        <div className="red-button">
        <button className="btn btn-lg text-white" onClick={() => this.updateModal(true)} >
          Login
        </button>
        </div>
        <LoginModal modalIsOpen={this.state.modalIsOpen} setModalIsOpen={this.updateModal}/>

      </div>   
    );
  }
};

export default LoginButton;

