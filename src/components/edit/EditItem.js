// import React, { useEffect, useState } from "react";
import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

const EditItem = (props) => {

// =========================================== UPDATE ITEM =============================================================

// function updateItem(id){
//   axios.put(`http://localhost:3000/updateitem/${id}`).then((res)=>{
//     console.log(res.data)
    
//   }).catch((err)=>{
//     console.log("*Items* UNABLE TO UPDATE ITEM!!")
//   })
// }

  return (
    <div className="container">
    <div>
    <h1>{props.title}</h1>
    </div>
    <Link className="btn btn-warning" to="/items">BACK</Link>
  <Link className="btn btn-primary" to="/">BACK TO HOME</Link>
      <form>
  <div className="mb-3">
    <label for="" className="form-label">NAME</label>
    <input type="text" className="form-control" id="name"/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">CATEGORY ID</label>
    <input type="text" className="form-control" id="address"/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">RESTAURANT ID</label>
    <input type="text" className="form-control" id="ccode"/>
  </div>
  <button /*</form>onClick={updateItem()}*/ type="submit" className="btn btn-primary">UPDATE</button>
</form>
    </div>
  )
}

export default EditItem