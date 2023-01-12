import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Form, Button, FormField} from 'semantic-ui-react'

const AddItem = (props) => {

const [name, setName] = useState('')
const [catId, setCatId] = useState('')
const [resId, setResId] = useState('')

console.log(name)
console.log(catId)
console.log(resId)

//===================ADD ITEM =================

const addItem=()=>{
  axios.post(`http://localhost:3000/additem`,{
    name,catId,resId
  })
}

return (
    
<div className="container">
<div>
<h1>{props.title}</h1>
</div>

  <div>
  <Link className="btn btn-warning" to="/items">BACK</Link>
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
    <label for="" className="form-label">CATEGORY ID</label>
    <input onChange={(e)=>setCatId(e.target.value)} name="resid" type="text" className="form-control" id="resid"/>
  </div>
  </FormField>

<FormField>
  <div className="mb-3">
    <label for="" className="form-label">RESTAURANT ID</label>
    <input onChange={(e)=>setResId(e.target.value)} name="resid" type="text" className="form-control" id="resid"/>
  </div>
  </FormField>

  


  <Button onChange={addItem} type="submit" className="btn btn-primary">ADD</Button>
</Form>
</div>

  )
}

export default AddItem