import React from "react";
import TitleCase from "../general/title-case-component";

const GeneralTable = (props) => {
  if (props.records && props.records.length > 0) {
    return (
      <div id = "table">
      <div className="table-wrapper-scroll-y my-custom-scrollbar table-responsive">
      <table className="table">
        <thead>
          <tr>
            {Object.keys(props.records[0]).map((objectKey, index) => {
              return (
                <th key={index}>
                <TitleCase content={objectKey}></TitleCase>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.records.map((record) => {
            return (
              <tr key={record.id}>
                {Object.keys(record).map((objectKey) => {
                  return <td key={objectKey}>{record[objectKey]}</td>;
                })}
              </tr>
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