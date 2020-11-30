import React from "react";
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useFetch from "../components/useFetch";


function Restaurants(){
    const { data = [] } = useFetch("/mock/restaurants.json");
    const history = useHistory();
    return (
      <div className="container">
        <div className="rightPanel">    
            {data.map((item) => (
            <div className="img-card">
                <img src={item.photoUrl} height="200px"/>
                <p>{item.name}</p>
            </div>   
            ))}
        </div>
      </div>
    );
}

export default Restaurants;