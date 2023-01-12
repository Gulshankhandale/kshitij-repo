import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Items = (props) => {

  const [itemList, setItemList] = useState([]);


  useEffect(()=>{
    getItemList();
  }, []); 

  function getItemList(){
    axios.get("http://localhost:3000/items").then((res)=>{
      console.log(res)
  
      setItemList(res.data)
  
    }).catch((err)=>{
      console.log(' *Items* SOMETHING WENT WRONG@!')
    })
  }

  // =========================================== GET ONE BY ID ==============================================================

// function getOneItem(id){
//   axios.get(`http://localhost:3000/item/${id}`).then((res)=>{
//     console.log(res.data)
    
//   }).catch((err)=>{
//     console.log("*Items* CANNOT FETCH ITEM!!")
//   })
// }

// =========================================== ADD ITEM =============================================================

// function addItem(){
//   axios.post(`http://localhost:3000/additem`).then((res)=>{
//     console.log(res.data)
    
//   }).catch((err)=>{
//     console.log("*Items* CANNOT ADD ITEM!!")
//   })
// }

// =========================================== DELETE ITEM =============================================================

// function delItem(id){
//   axios.delete(`http://localhost:3000/deleteitem/${id}`).then((res)=>{
//     console.log(res.data)
    
//   }).catch((err)=>{
//     console.log("*Items* NOT DELETED!!")
//   })
// }


  return (
    <div className="conatiner">
      <h2>{props.title}</h2>

      <div>
      <Link className="btn btn-success" to="/additem">ADD ITEM</Link>
      <Link className="btn btn-primary" to="/">BACK TO HOME</Link>
          </div>
          <div>
          <div className="my-5">
          <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="SEARCH BY ID" aria-label="Search"/>
        <Link type="submit" className="btn btn-outline-success" to="/item">SEARCH</Link>
      </form>
          </div>
          </div>
       
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>ITEM ID</td>
                <td>RES-ID</td>
                <td>CREATED AT</td>
                <td>UPDATED AT</td>
                <td>ACTION</td>
              </tr>
            </thead>

{itemList.map((item, index)=>
<>
            
            <tbody>
              
            <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.itemid}</td>
              <td>{item.resid}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td>
              
              <div>
              <Link className="btn btn-primary" to={`/edititem/${item.id}`}>EDIT</Link>
              <Link className="btn btn-danger" to="/deleteitem">DELETE</Link>
              </div>

              </td>

            </tbody>
            </>)}
          </table>
        </div>
    
  );
};

export default Items;
