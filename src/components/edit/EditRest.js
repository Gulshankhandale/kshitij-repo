// import React, { useEffect, useState } from "react";
import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

const EditRest = (props) => {

// =========================================== UPDATE RESTAURANT =============================================================

// function updateRest(id){
//   axios.put(`http://localhost:3000/updaterestaurant/${id}`).then((res)=>{
//     console.log(res.data)
    
//   }).catch((err)=>{
//     console.log("*Restaurants* UNABLE TO UPDATE RESTAURANT!!")
//   })
// }

  return (
    <div className="container">
    <div>
      <h1>{props.title}</h1>
    </div>
    <Link className="btn btn-warning" to="/restaurants">BACK</Link>
  <Link className="btn btn-primary" to="/">BACK TO HOME</Link>
      <form>
  <div className="mb-3">
    <label for="" className="form-label">NAME</label>
    <input type="text" className="form-control" id="name"/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">ADDRESS</label>
    <input type="text" className="form-control" id="address"/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">COUNTRY CODE</label>
    <input type="text" className="form-control" id="ccode"/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">PHONE</label>
    <input type="text" className="form-control" id="phone"/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">OPEN TIME</label>
    <input type="text" className="form-control" id="ot"/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">CLOSE TIME</label>
    <input type="text" className="form-control" id="ct"/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">STATUS</label>
    <input type="text" className="form-control" id="status"/>
  </div>
  <button /*onClick={updateRest()}*/ type="submit" className="btn btn-primary">UPDATE</button>
</form>
    </div>
  )
}

export default EditRest