import React, { useState } from "react";
import LogoutForm from "./logout-form";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Login from "./login-component"


const LogoutButton = (props) => {
    let[logout,setLogout] = useState({Login});
    const submitLogout = (e) =>{
        e.preventDefault();
        (async _ =>{
            try{
                const logoutResult = await axios.get("http://13.59.52.148:8082/auth/logout",logout);
                sessionStorage.clear(logoutResult.data.token);
                props.history.push ('/');
            } catch(err){
                console.log(err)
            }
        })() 
    }

    const handleChange = (e) =>{
        const credentials  = null;
        const inputField = e.target.name 
        setLogout({...logout, [inputField]: credentials})
    }

    return(
        <div className = 'Logout'>
            <LogoutForm onClick={submitLogout} onSubmit={handleChange}>
            </LogoutForm>
        </div>
    )
};

export default withRouter(LogoutButton);