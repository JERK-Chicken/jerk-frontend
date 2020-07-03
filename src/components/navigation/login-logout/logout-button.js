import React from "react";
import { connect } from "react-redux";
// import axios from "axios";
// import { withRouter } from "react-router-dom";
import {logOut} from '../../../redux/actions/logging-actions'

const LogoutButton = (props) => {
    const submitLogout = (e) =>{
        e.preventDefault();
        (async _ =>{
            // try{
            //     const logoutResult = await axios.get("http://13.59.52.148:8082/auth/logout",logout);
            //     sessionStorage.clear(logoutResult.data.token);
            //     props.history.push ('/');
            // } catch(err){
            //     console.log(err)
            // }
            props.logOut();
        })() 
    }

    return(
        <div className = 'Logout'>
            <div className="red-button">
                <button className="btn btn-lg" onClick={submitLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        logOut: () => dispatch(logOut()),
    };
}

export default connect(null, mapDispatchToProps)(LogoutButton);