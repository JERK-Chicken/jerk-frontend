import React from "react";
// import axios from "axios";
// import jwt from "jsonwebtoken";
import { connect } from "react-redux";
import FormInput from "../../general/form-input-component";
import Register from "./register-component";
import {logIn} from '../../../redux/actions/logging-actions'

const LoginForm = (props) => {
  const submitLogin = (e) => {
    e.preventDefault();
    (async _ => {
      // try {
      //   const loginResult = await axios.post("http://13.59.52.148:8082/login", props.credentials);
      //   sessionStorage.setItem("json-token",loginResult.data.token)
      //   const decoded = jwt.decode(loginResult.data.token);
    
      //   if(decoded.roles === 'admin'){
      //     props.history.push('/admin')
      // } else{
      //   if(decoded.roles === 'user'){
      //     props.history.push('/user')
      //   }
      // }
      // } catch (error) {
      //   console.error(error);
      // }
      props.logIn();
    })()
  };

  return (
    <form className = "input-form">
      <FormInput name="username" type="text" onChange={props.onChange}></FormInput>
      <FormInput name="password" type="password" onChange={props.onChange}></FormInput>
      <button className="btn btn-primary" onClick={submitLogin}>
        Submit
      </button>
        <Register></Register>
    </form>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    logIn: () =>
      dispatch(logIn()),
  };
}

export default connect(null, mapDispatchToProps)(LoginForm);