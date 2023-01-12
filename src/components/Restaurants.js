import axios from "axios";
// import {Button, Form} from 'semantic-ui-react'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Restaurants = (props) => {
  
const [restList, setRestList] = useState([]);
const [ID, setID] = useState("")
const [idRes, setIdRes] = useState("")

useEffect(()=>{
  getRestList();
}, []); 

console.log(ID)

// =========================================== GET ALL RESTAURANTS ===========================================================

function getRestList(){
  axios.get("http://localhost:3000/restaurants").then((res)=>{
    console.log(res)

    setRestList(res.data)

  }).catch((err)=>{
    console.log('*Restaurants* SOMETHING WENT WRONG@!')
  })
}

// =========================================== GET ONE BY ID =================================================================

function getOneRest(id){
  axios.get(`http://localhost:3000/restaurant/${id}`).then((res)=>{
    console.log(res.data)
    setIdRes(res.data)
    
  }).catch((err)=>{
    console.log("*Restaurants* CANNOT FETCH RESTAURANT!!")
  })
}

// =========================================== DELETE RESTAURANT =============================================================

// function delRest(id){
//   axios.delete(`http://localhost:3000/deleterestaurant/${id}`).then((res)=>{
//     console.log(res.data)
    
//   }).catch((err)=>{
//     console.log("*Restaurants* NOT DELETED!!")
//   })
// }

console.warn(restList)

  return (
    <div className="conatiner">
          <h2>{props.title}</h2>
          
          <div>
          <Link className="btn btn-success" to="/addrestaurant">ADD RESTAURANTS</Link>
          <Link className="btn btn-primary" to="/">BACK TO HOME</Link>
          </div>
          <div>
          <div className="my-5">

          <form className="d-flex" role="search">

        <input className="form-control me-2" type="search" placeholder="SEARCH BY ID" onChange={(e)=>{setID(e.target.value)}}/>

        <Link className="btn btn-outline-success" onClick={()=>getOneRest(idRes)}>SEARCH</Link>

      </form>

          </div>
          </div>

          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>ADDRESS</td>
                <td>COUNTRY CODE</td>
                <td>PHONE</td>
                <td>OPEN TIME</td>
                <td>CLOSE TIME</td>
                <td>STATUS</td>
                <td>CREATED AT</td>
                <td>UPDATED AT</td>
                <td>ACTION</td>
              </tr>
            </thead>
            
              {restList.map((item, index)=>
              <>
              <tbody>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.country_code}</td>
              <td>{item.phone}</td>
              <td>{item.open_time}</td>
              <td>{item.close_time}</td>
              <td>{item.status}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td>
              
              <div>
              <Link className="btn btn-primary" to={`/editrestaurant/${item.id}`}>EDIT</Link>
              <Link /*onClick={delRest(item.id)}*/ className="btn btn-danger" to="/deleterestaurant">DELETE</Link>
              </div>

              </td>
              </tbody>
              </>
              )}
            
          </table>
        
          {/* console.log(ID) */}
      
    </div>
  );
};

export default Restaurants;
