import React from 'react';
import jwt from "jsonwebtoken";

function UserInfo() {
    const info = jwt.decode(sessionStorage.getItem("json-token"));

  return (
        <div>
            {info.username}
            {info.role}
        </div>
    )
}

export default UserInfo;