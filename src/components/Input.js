import React from "react";

function Input({ value, placeholder, onLocalChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      className="form-control"
      onChange={onLocalChange}
    />
  );
}

export default Input;
