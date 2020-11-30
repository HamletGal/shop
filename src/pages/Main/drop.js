import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../../components/useFetch";
import Input from "../../components/Input";

function Drop() {
  const { data = [] } = useFetch("/mock/kitchenTypes.json");
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const history = useHistory();
  console.log(data)


  const handleTypeSelect = (e) => {
    console.log("Selected city", e.target.value);
    const typeSel = e.target.value;
    setType(typeSel);
  }

  
  return (
    <>
       <select
        className="browser-default custom-select"
        name="kitchenType"
        onChange={(e) => handleTypeSelect(e)}
        value={selectedType}
      >
        <option value="">Select the Type</option>
        {data.map((type, index) => (
          <option key={index} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Drop;
