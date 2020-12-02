import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../components/useFetch";

function Type() {
  const history = useHistory();
  const params = useParams();
  const { data = [] } = useFetch("/mock/restaurants.json");

  const result = data.filter((eachVal) => {
    let opt = eachVal.kitchenTypes.some(
      (kitchenTypes) => kitchenTypes === params.abbr
    );
    return opt;
  });

  return (
    <div className="row">
      {result.map((item) => (
        <div className="col-md-4 mt-2" key={item.id}>
          <div
            className="card"
            onClick={() => history.push(`/type/${item.id}`)}
          >
            <img
              className="card-img-top"
              src={item.photoUrl}
              alt="Card image cap"
            />
            <p className="card-text">{item.name}</p>
            <p className="card-text">{item.price}</p>
          </div>
        </div>
      ))}
      <div className="col-md-12">
        <button className="btn btn-danger" onClick={() => history.push("/")}>
          go to back
        </button>
      </div>
    </div>
  );
}

export default Type;
