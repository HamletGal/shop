import React from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../../components/useFetch";

function Restaurants() {
  const { data = [] } = useFetch("/mock/restaurants.json");
  const history = useHistory();
  return (
    <div className="row">
      {data.map((item) => (
        <div className="col-md-4 mt-2">
          <div class="card" onClick={() => history.push(`/type/${item.id}`)}>
            <img
              class="card-img-top"
              src={item.photoUrl}
              alt="Card image cap"
            />
            <p class="card-text">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Restaurants;

