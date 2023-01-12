import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = (props) => {

  const [catList, setCatList] = useState([]);


  useEffect(()=>{
    getCatList();
  }, []); 

// =========================================== GET ALL CATEGORIES ===========================================================

  function getCatList(){
    axios.get("http://localhost:3000/categories").then((res)=>{
      console.log(res)
  
      setCatList(res.data)
  
    }).catch((err)=>{
      console.log(' *Categories* SOMETHING WENT WRONG@!')
    })
  }

// =========================================== GET ONE BY ID ============================================================

// function getOneCat(id){
//   axios.get(`http://localhost:3000/category/${id}`).then((res)=>{
//     console.log(res.data)
    
//   }).catch((err)=>{
//     console.log("*Categories* CANNOT FETCH CATEGORY!!")
//   })
// }

// =========================================== DELETE CATEGORY =============================================================

// function delCat(id){
//   axios.delete(`http://localhost:3000/deletecategory/${id}`).then((res)=>{
//     console.log(res.data)
    
//   }).catch((err)=>{
//     console.log("*Categories* NOT DELETED!!")
//   })
// }

  return (
    <div className="conatiner">
     <h2>{props.title}</h2>
     <div>

     <Link className="btn btn-success" to="/addcategory">ADD CATEGORY</Link>
      <Link className="btn btn-primary" to="/">BACK TO HOME</Link>
          </div>

          <div className="my-5">
          <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="SEARCH BY ID" aria-label="Search"/>
        <Link type="submit" className="btn btn-outline-success" to="/category">SEARCH</Link>
      </form>
          </div>

          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
              <td>ID</td>
                <td>RES-ID</td>
                <td>NAME</td>
                <td>CREATED AT</td>
                <td>UPDATED AT</td>
                <td>ACTION</td>
              </tr>
            </thead>

{catList.map((item, index)=>
<>
            
            <tbody>
              
            <td>{item.id}</td>
            <td>{item.resid}</td>
              <td>{item.name}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td>
              
              <div>
              <Link className="btn btn-primary" to={`/editcategory/${item.id}`}>EDIT</Link>
              <Link className="btn btn-danger" to="/deletecategory">DELETE</Link>
              </div>

              </td>

            </tbody>
            </>)}
          </table>
        
    </div>
  );
};

export default Categories;
