import React from "react";
import PropTypes from "prop-types";

export default function FormInput(props) {
  return (
    <div className="form-group">
      <input
        id={props.name}
        name={props.name}
        className="form-control"
        placeholder={`Enter ${props.name}`}
        type={props.type || "text"}
        onChange={props.onChange}
      />
    </div>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};