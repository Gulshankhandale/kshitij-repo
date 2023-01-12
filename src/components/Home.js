import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
 
  return (
    <div className="conatiner">
      <div>
        <h1>{props.title}</h1>
      </div>
      <div>
      <Link className="btn btn-primary" to="/restaurants">RESTAURANTS</Link>
      <Link className="btn btn-dark" to="/categories">CATEGORIES</Link>
      <Link className="btn btn-success" to="/items">ITEMS</Link>
      </div>
    </div>
  );
};

export default Home;
