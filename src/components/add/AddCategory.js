import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Form, Button, FormField} from 'semantic-ui-react'

const AddCategory = (props) => {

  const [resId, setResId] = useState('')
  const [name, setName] = useState('')

  console.log(resId)
console.log(name)

// =========================================== ADD RESTAURANT ================================================================

const addCat=()=>{

axios.post(`http://localhost:3000/addcategory`,{
  resId,name
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
  <Link className="btn btn-warning" to="/categories">BACK</Link>
  <Link className="btn btn-primary" to="/">BACK TO HOME</Link>
  </div>
  
<Form>

<FormField>
  <div className="mb-3">
    <label for="" className="form-label">RESTAURANT ID</label>
    <input onChange={(e)=>setResId(e.target.value)} name="resid" type="text" className="form-control" id="resid"/>
  </div>
  </FormField>

  <FormField>
  <div className="mb-3">
    <label for="" className="form-label">NAME</label>
    <input onChange={(e)=>setName(e.target.value)} name="name" type="text" className="form-control" id="address"/>
  </div>
  </FormField>

  <Button onClick={addCat} type="submit" className="btn btn-primary">ADD</Button>
</Form>
</div>

  )
}

export default AddCategory