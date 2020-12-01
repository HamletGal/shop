import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../components/useFetch";

function Single() {
  const history = useHistory();
  const params = useParams();
  const [searchMin, setSearchMin] = useState("");
  const [searchMax, setSearchMax] = useState("");
  const { data = [] } = useFetch(`/mock/menus/${params.id}.json`);

  const handleChangeMin = (e) => {
    setSearchMin(e.target.value);
  };

  const handleChangeMax = (e) => {
    setSearchMax(e.target.value);
  };

  const results = !searchMin
    ? data
    : data.filter((data) =>
        data.price >= Number(searchMin) && data.price <= Number(searchMax)
      );

  return (
    <>
    <div className="row mt-3">
      <div className="col-md-4">
      <input 
          type="text"
          placeholder="Min Price"
          value={searchMin}
          className="form-control"
          onChange={handleChangeMin}
        />
        </div>
        <div className="col-md-4">
        <input 
          type="text"
          placeholder="Max Price"
          value={searchMax}
          className="form-control"
          onChange={handleChangeMax}
        />
      </div>
    </div>
    <div className="row">
     {results.map((item) => (
        <div className="col-md-4 mt-2">
          <div class="card">
            <img
              class="card-img-top"
              src={item.photoUrl}
              alt="Card image cap"
            />
            <p class="card-text">{item.name}</p>
            <p class="card-text">{item.price}</p>
          </div>
        </div>
      ))}
      <div className="col-md-12">
        <button className="btn btn-danger" onClick={() => history.push("/")}>go to back</button>
      </div>
    </div>
    </>
  );
}

export default Single;