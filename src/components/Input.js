import React from "react";

function Input({value,onLocalChange}){
    return(
        <input
          type="text"
          placeholder="Search"
          value={value}
          className="form-control"
          onChange={onLocalChange}
        />
    )
}

export default Input;