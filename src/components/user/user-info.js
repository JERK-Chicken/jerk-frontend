import React from 'react';
import jwt from "jsonwebtoken";

function UserInfo() {
    const info = jwt.decode(sessionStorage.getItem("json-token"));

    return (
        <div className="card">
            <div className="card-header"><h3>Welcome, {info.username}!</h3></div>
                <div className="card-body">
                    Roles
                    <ul>
                        {info.roles.map((r)=>{return <li key={r.role}>{r.role}</li>})}
                    </ul>
                </div>
            <div className="row card-footer justify-content-between"></div>
        </div>
    )
}

export default UserInfo;