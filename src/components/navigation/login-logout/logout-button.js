import React from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import {logOut} from '../../../redux/actions/logging-actions'

const LogoutButton = (props) => {
    const submitLogout = (e) =>{
        e.preventDefault();
        props.logOut();
        props.history.push('/');
    }

    return(
        <div>
            <button className="btn text-white" onClick={submitLogout}>
                Logout
            </button>            
        </div>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        logOut: () => dispatch(logOut()),
    };
}

export default connect(null, mapDispatchToProps)(withRouter(LogoutButton));