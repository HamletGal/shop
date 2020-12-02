import React from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../../components/useFetch";

function Drop() {
  const { data = [] } = useFetch("/mock/kitchenTypes.json");
  const history = useHistory();

  return (
    <>
      <button
        className="btn btn-primary dropdown-toggle m-0"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Select the Kitchen Type
      </button>

      <div className="dropdown-menu">
        {data.map((type, index) => (
          <a
            className="dropdown-item"
            key={index}
            value={type.name}
            onClick={() => history.push(`/kitchen-type/${type.abbr}`)}
          >
            {type.name}
          </a>
        ))}
      </div>
    </>
  );
}

export default Drop;
