import React from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import FormInput from "../../../general/form-input-component";

import { connect } from "react-redux";
import {logIn} from '../../../../redux/actions/logging-actions';
import {loadUsername} from '../../../../redux/actions/loading-actions';
import {loadUserRoles} from '../../../../redux/actions/loading-actions';

const RegisterForm = (props) => {
  const submitRegister = (e) => {
    e.preventDefault();

    (async _ => {
      try {
        const response = await axios.post("/users/register", props.credentials)

        const data = jwt.decode(response.data);
        props.loadUsername(data.username);
        props.loadUserRoles(data.roles);
        props.logIn(response.data);

        props.closeModals();
      } 
      catch (error) {
        console.error(error);
      }
    })();


  };

  return (
      <form className = "input-form">
        <FormInput name="username" type="text" onChange={props.onChange}></FormInput>
        <FormInput name="password" type="password" onChange={props.onChange}></FormInput>
        <FormInput name="confirm-password" type="password" onChange={props.onChange}></FormInput>
        <button className="btn btn-primary" onClick={submitRegister}>
          Submit
        </button>
      </form>
  );
};


function mapDispatchToProps(dispatch) {
  return {
    logIn: (token) => dispatch(logIn(token)),
    loadUsername: (username) => dispatch(loadUsername(username)),
    loadUserRoles: (roles) => dispatch(loadUserRoles(roles)),
  };
}

export default connect(null, mapDispatchToProps)(RegisterForm);