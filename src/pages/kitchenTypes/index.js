import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../components/useFetch";
import { CartContext } from './../../context/CartContext';
import Input from "../../components/Input";
import Image from "../../components/Image";

function Single() {
  const history = useHistory();
  const params = useParams();
  const [searchMin, setSearchMin] = useState("");
  const [searchMax, setSearchMax] = useState("");
  const [, setCart] = useContext(CartContext);
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

  const addToCart = (item) => {
    setCart(currentState => [...currentState,{ id:Date.now(), name:item.name, price:item.price }]);
  }    

  return (
    <>
    <div className="row mt-3">
      <div className="col-md-4">
        <Input value={searchMin} placeholder="Min Price" onLocalChange={handleChangeMin} />
        </div>
        <div className="col-md-4">
        <Input value={searchMax} placeholder="Max Price" onLocalChange={handleChangeMax} />
      </div>
    </div>
    <div className="row">
     {results.map((item) => (
        <div className="col-md-4 mt-2" key={item.id}>
          <div className="card" onClick={() => addToCart(item) } >
            <Image src={item.photoUrl} className="card-img-top" alt="Card image cap" />
            <p className="card-text">{item.name}</p>
            <p className="card-text">{item.price}</p>
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