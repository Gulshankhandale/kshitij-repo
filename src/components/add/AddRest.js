import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Form, Button, FormField} from 'semantic-ui-react'

const AddRest = (props) => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [cc, setCc] = useState('')
  const [phone, setPhone] = useState('')
  const [ot, setOt] = useState('')
  const [ct, setCt] = useState('')
  const [status, setStatus] = useState('')

console.log(name)
console.log(address)
console.log(cc)
console.log(phone)
console.log(ot)
console.log(ct)
console.log(status)

// =========================================== ADD RESTAURANT ================================================================

const addRest=()=>{

axios.post(`http://localhost:3000/addrestaurant`,{
  name,address,cc,phone,ot,ct,status
})

  // axios.post("http://localhost:3000/addrestaurant").then((res)=>{
  //   name,address,cc,phone,ot,ct,status
    
  // }).catch((err)=>{
  //   console.log("*Restaurants* CANNOT ADD RESTAURANT!!")
  // })
}


return (
    
<div className="container">
<div>
<h1>{props.title}</h1>
</div>

  <div>
  <Link className="btn btn-warning" to="/restaurants">BACK</Link>
  <Link className="btn btn-primary" to="/">BACK TO HOME</Link>
  </div>
  
<Form>

  <FormField>
  <div className="mb-3">
    <label for="" className="form-label">NAME</label>
    <input onChange={(e)=>setName(e.target.value)} name="name" type="text" className="form-control" id="address"/>
  </div>
  </FormField>

  <FormField>
  <div className="mb-3">
    <label for="" className="form-label">ADDRESS</label>
    <input onChange={(e)=>setAddress(e.target.value)} name="address" type="text" className="form-control" id="address"/>
  </div>
  </FormField>

<FormField>
  <div className="mb-3">
    <label for="" className="form-label">COUNTRY CODE</label>
    <input onChange={(e)=>setCc(e.target.value)} name="cc" type="text" className="form-control" id="ccode"/>
  </div>
</FormField>

<FormField>
  <div className="mb-3">
    <label for="" className="form-label">PHONE</label>
    <input onChange={(e)=>setPhone(e.target.value)} name="phone" type="text" className="form-control" id="phone"/>
  </div>
  </FormField>

<FormField>
  <div className="mb-3">
    <label for="" className="form-label">OPEN TIME</label>
    <input onChange={(e)=>setOt(e.target.value)} name="ot" type="time" className="form-control" id="ot"/>
  </div>
  </FormField>

<FormField>
  <div className="mb-3">
    <label for="" className="form-label">CLOSE TIME</label>
    <input onChange={(e)=>setCt(e.target.value)} name="ct" type="time" className="form-control" id="ct"/>
  </div>
  </FormField>

<FormField>
  <div className="mb-3">
    <label for="" className="form-label">STATUS</label>
    <input onChange={(e)=>setStatus(e.target.value)} name="status" type="text" className="form-control" id="status"/>
  </div>
  </FormField>

  <Button onClick={addRest} type="submit" className="btn btn-primary">ADD</Button>
</Form>
</div>

  )
}

export default AddRest