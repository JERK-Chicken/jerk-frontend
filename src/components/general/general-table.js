import React from "react";
import GeneralRow from "./general-row";

const GeneralTable = (props) => {

  if (props.records && props.records.length > 0) {
    return (
      <div id = "table">
      <div className="table-wrapper-scroll-y my-custom-scrollbar table-responsive table-hover">
      <table className="table">
        <tbody>
          {props.records.map((record) => {
            let isActive = (props.selectedId === record.id);;
            return (
              <GeneralRow key={record.id} record={record} isActive={isActive} setSelectedId={props.setSelectedId}/>
            );
          })}
        </tbody>
      </table>
      </div>
      </div>
    );
  } else {
    return <span>No data to show</span>;
  }
};

export default GeneralTable;