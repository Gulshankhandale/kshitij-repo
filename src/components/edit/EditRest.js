// import React, { useEffect, useState, useEffect } from "react";
import React from "react";
// import axios from "axios";
import { Link, useParams } from "react-router-dom";

const EditRest = (props) => {
    
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [country_code, setCountryCode] = useState('');
    const [phone, setPhone] = useState('');
    const [open_time, setOpenTime] = useState('');
    const [close_time, setCloseTime] = useState('');
    const [status, setStatus] = useState('');
    
    const {id} = useParams();
    
    function getRest(rest_id){
        
        axios.get(`http://localhost:3000/restaurent/${rest_id}`)
        .then((res)=>(
            console.log(res.data)
            setName(res.data.name)
            setAddress(res.data.address)
            setCountryCode(res.data.country_code)
            setPhone(res.data.phone)
            setOpenTime(res.data.open_time)
            setCloseTime(res.data.close_time)
            setStatus(res.data.status)
        )).catch((err)=>{
            console.log("Something went wrong")
        })
    }

// =========================================== UPDATE RESTAURANT =============================================================

 function updateRest(update_id){
   axios.put(`http://localhost:3000/updaterestaurant/${update_id}`,{
       name,
       address,
       country_code,
       phone,
       open_time,
       close_time,
       status
   }).
    then((res)=>{
     console.log(res.data)
    
   }).catch((err)=>{
     console.log("*Restaurants* UNABLE TO UPDATE RESTAURANT!!")
   })
 }

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
    <input type="text" className="form-control" value={name || ""} id="name" onChange={(e)=>{setName(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">ADDRESS</label>
    <input type="text" className="form-control" value={name || ""} id="address" onChange={(e)=>{setAddress(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">COUNTRY CODE</label>
    <input type="text" className="form-control" value={address || ""} id="ccode" onChange={(e)=>{setCountryCode(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">PHONE</label>
    <input type="text" className="form-control" value={phone || ""} id="phone" onChange={(e)=>{setPhone(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">OPEN TIME</label>
    <input type="text" className="form-control" value={open_time || ""} id="ot" onChange={(e)=>{setOpenTime(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">CLOSE TIME</label>
    <input type="text" className="form-control" value={close_time || ""} id="ct" onChange={(e)=>{setCloseTime(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label for="" className="form-label">STATUS</label>
    <input type="text" className="form-control" value={status || ""} id="status" onChange={(e)=>{setStatus(e.target.value)}}/>
  </div>
  <button onClick={()=>{updateRest(id)}} className="btn btn-primary">UPDATE</button>
</form>
    </div>
  )
}

export default EditRest
