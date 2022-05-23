import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Inventory from './pages/Inventory/Inventory';
import RequireAuth from './RequireAuth';
import Inventories from './pages/Inventories/Inventories';
import AddInventory from './pages/AddInventory/AddInventory';
import { useEffect, useState } from 'react';
import MyItems from './pages/MyItems/MyItems';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound/NotFound';

function App() {

  const[items,setItems] = useState([]);

  useEffect(()=>{
    fetch("https://fast-plains-40860.herokuapp.com/inventory")
    .then(res=>res.json())
    .then(data=>setItems(data))
  },[items]);
  

 

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home items={items}  />} />
        <Route path="inventory/:id" element={ <RequireAuth><Inventory/></RequireAuth>} />
        <Route path="manage/inventory" element={ <RequireAuth><Inventories/></RequireAuth>} />
        <Route path="myitems" element={ <RequireAuth><MyItems/></RequireAuth>} />
        <Route path="manage/inventory/add/inventory" element={ <RequireAuth><AddInventory/></RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
