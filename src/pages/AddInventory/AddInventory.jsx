import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import './addinventory.css';
import toast, { Toaster } from 'react-hot-toast';


function AddInventory() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [supplier, setSupplier] = useState('');

  const [user] = useAuthState(auth);

  const handleAdd = () => {
    fetch('http://localhost:5000/add/inventory', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id, name, imgURL , desc, price, quantity, supplier, email:user.email }),
    })
      .then(res => res.json())
      .then(data => console.log(data))

      setId('');
      setName('');
      setImgURL('');
      setDesc('');
      setPrice('');
      setQuantity('');
      setSupplier('');

      toast("Inventory added successfully");

  }




  return (
    <div className="addinventory container card col-md-6 mt-5 mb-5">
      <h3 className='text-center'>Add new inventory</h3>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder='ID' value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="col-md-8">
          <input type="text" className="form-control" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <input type="text" className="form-control mt-3" value={imgURL} placeholder='Image URL' onChange={(e) => setImgURL(e.target.value)}/>
      <textarea name="" id="" cols="30" rows="8" value={desc} className="form-control mt-3" placeholder='Description' onChange={(e) => setDesc(e.target.value)}></textarea>
      <div className="row">
        <div className="col-md-3">
          <input type="text" className="form-control mt-3" value={price} placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control mt-3" value={quantity} placeholder='Quantity' onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control mt-3" value={supplier} placeholder='Supplier name' onChange={(e) => setSupplier(e.target.value)} />
        </div>
      </div>

      <div className='text-end m-3'>
        <button className='btn btn-primary' onClick={handleAdd}>Add</button>
      </div>
      <Toaster></Toaster>

    </div>
  );
}

export default AddInventory;