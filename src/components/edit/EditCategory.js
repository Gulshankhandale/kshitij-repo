// import React, { useEffect, useState } from "react";
import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

const EditCategory = (props) => {

// =========================================== UPDATE CATEGORY =============================================================

// function updateCat(id){
//   axios.put(`http://localhost:3000/updatecategory/${id}`).then((res)=>{
//     console.log(res.data)
    
//   }).catch((err)=>{
//     console.log("*Categories* UNABLE TO UPDATE CATEGORY!!")
//   })
// }

  return (
    <div className="container">
    <div>
      <h1>{props.title}</h1>
    </div>
    <Link className="btn btn-warning" to="/categories">BACK</Link>
  <Link className="btn btn-primary" to="/home">BACK TO HOME</Link>
      <form>
  <div className="mb-3">
    <label for="" className="form-label">RESTAURAT ID</label>
    <input type="text" className="form-control" id="name"/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">NAME</label>
    <input type="text" className="form-control" id="address"/>
  </div>
  <button /*onClick={updateCat()}*/ type="submit" className="btn btn-primary">UPDATE</button>
</form>
    </div>

  )
}

export default EditCategory


