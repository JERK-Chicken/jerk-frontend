import React from "react";
import GeneralTable from "../general/general-table"
import axios from "axios";


const UserInfo = () => {
  const [information, setInfo] = React.useState([]);
  const token = sessionStorage.getItem("json-token");
  React.useEffect(() => {
    axios
      .get("http://3.136.11.92:8083/users/recipebook", {headers :{'x-access-token':`${token}`}})
      .then((response) => {
        setInfo(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },[token]);


  return (
  <div>
  <GeneralTable records={information}></GeneralTable>
  </div>
  );  
};

export default UserInfo;