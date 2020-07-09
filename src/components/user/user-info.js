import React from 'react';
import jwt from "jsonwebtoken";

function UserInfo() {
    const info = jwt.decode(sessionStorage.getItem("json-token"));

  return (
        <div>    
            Roles
            <ul>{info.roles.map((r)=>{return <li key={r.role}>{r.role}</li>})}</ul>
        </div>
    )
}

export default UserInfo;