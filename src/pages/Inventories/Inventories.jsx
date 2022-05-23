import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './inventories.css';
import toast, { Toaster } from 'react-hot-toast';


function Inventories() {
  const[items,setItems] = useState([]);

  useEffect(()=>{
    fetch("https://fast-plains-40860.herokuapp.com/")
    .then(res=>res.json())
    .then(data=>setItems(data))
  },[items]);

  const handleDelete = (id)=>{
    if (window.confirm("Do you really want to delete?")) {
      console.log('https://fast-plains-40860.herokuapp.com/delete/inventory/'+id);
    fetch('https://fast-plains-40860.herokuapp.com/delete/inventory/'+id, {
      method: "Delete",
    })
    .then(res => res.json())
    .then(data => console.log(data))
    toast("Inventory deleted successfully");
    }
   

  }

  return (
    <div className="inventories container mt-4"> 
    <Link to="add/inventory" className='btn btn-primary mb-3'>Add new item</Link>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Supplier</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
    {
      items.map(item=> 
      <tr key={item._id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.supplier}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td><button className='btn btn-sm btn-danger' onClick={()=>handleDelete(item._id)} >Delete</button></td>
      </tr>
      
    )}
    
 
  </tbody>
</table>
<Toaster></Toaster>
    </div>
  );
}

export default Inventories;