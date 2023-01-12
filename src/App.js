// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restaurants from "./components/Restaurants";
import Categories from "./components/Categories";
import Items from "./components/Items";
import Home from "./components/Home";

import AddRest from "./components/add/AddRest";
import AddItem from "./components/add/AddItem";
import AddCategory from "./components/add/AddCategory"

import EditRest from "./components/edit/EditRest";
import EditItem from "./components/edit/EditItem";
import EditCategory from "./components/edit/EditCategory"

// import DelRest from "./components/delete/DelRest";
// import DelItem from "./components/delete/DelItem";
// import DelCat from "./components/delete/DelCat"



function App() {
  return (
    <div className="App">
      <h1>CRUD Application using React.js and Node.js</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home title='HOME PAGE' />} />
          <Route path="/restaurants" element={<Restaurants title='RESTAURANTS LIST' />}/>
          <Route path="/categories" element={<Categories title='CATEGORIES LIST'/>}/>
          <Route path="/items" element={<Items title='ITEMS LIST' />}/>

          {/* ADD */}
          <Route path="/addrestaurant" element={<AddRest title='ADD RESTAURANT' />}/>
          <Route path="/addcategory" element={<AddCategory title='ADD CATEGORY' />}/>
          <Route path="/additem" element={<AddItem title='ADD ITEM' />}/>

          {/* EDIT */}
          <Route exact path="/editrestaurant/:id" element={<EditRest title='EDIT RESTAURANT' />}/>
          <Route exact path="/editcategory/:id" element={<EditCategory title='EDIT CATEGORY' />}/>
          <Route exact path="/edititem/:id" element={<EditItem title='EDIT ITEM' />}/>

          {/* DELETE
          <Route exact path="/deleterestaurant/:id" element={<DelRest title='DELETE RESTAURANT' />}/>
          <Route exact path="/deletecategory/:id" element={<DelCat title='DELETE CATEGORY' />}/>
          <Route exact path="/deleteitem/:id" element={<DelItem title='DELETE ITEM' />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
