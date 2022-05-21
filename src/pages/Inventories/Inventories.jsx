import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './inventories.css';

function Inventories() {
  const[items,setItems] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/")
    .then(res=>res.json())
    .then(data=>setItems(data))
  },[]);

  const handleDelete = (id)=>{
    fetch('http://localhost:5000/delete/inventory'+id, {
      method: "Delete",
    })
    .then(res => res.json())
    .then(data => console.log(data))

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
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.supplier}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td><Link className='btn btn-sm btn-danger' onClick={()=>handleDelete(item._id)} >Delete</Link></td>
      </tr>
      
    )}
    
 
  </tbody>
</table>
    </div>
  );
}

export default Inventories;