import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../../components/useFetch";
import Input from "../../components/Input";
import Image from "../../components/Image";
import Drop from "./drop";

function Restaurants() {
  const { data = [] } = useFetch("/mock/restaurants.json");
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const results = !searchTerm
    ? data
    : data.filter((data) =>
        data.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <>
      <div className="row mt-3">
          <div className="col-md-3">
            <Input value={searchTerm} placeholder="Search" onLocalChange={handleChange} />
          </div>
          <div className="col-md-6">
            <Drop />
          </div>
        </div>
      <div className="row">
        {results.map((item) => (
          <div className="col-md-4 mt-2" key={item.id}>
            <div
              className="card"
              onClick={() => history.push(`/type/${item.id}`)}
            >
              <Image src={item.photoUrl} className="card-img-top" alt="Image" />
              <p className="card-text">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Restaurants;
