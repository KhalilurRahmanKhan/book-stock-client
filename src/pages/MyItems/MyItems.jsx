import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.config';
import './myitems.css';
import toast, { Toaster } from 'react-hot-toast';


function MyItems() {
  const[items,setItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(()=>{
    fetch(`http://localhost:5000?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>setItems(data))
  },[user.email,items]);

  const handleDelete = (id)=>{
    if (window.confirm("Do you really want to delete?")) {
      console.log('http://localhost:5000/delete/inventory/'+id);
    fetch('http://localhost:5000/delete/inventory/'+id, {
      method: "Delete",
    })
    .then(res => res.json())
    .then(data => console.log(data))
    toast("Inventory deleted successfully");
    }
   
  
  }

  return (
    <div className="myitems container mt-4"> 
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

export default MyItems;