import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './inventory.css';

function Inventory() {


  let { id } = useParams();
  const[item,setItem] = useState([]);
  const[stock,setStock] = useState();

  useEffect(()=>{
    fetch("http://localhost:5000/inventory/"+id)
    .then(res=>res.json())
    .then(data=>setItem(data))
  },[id,item]);

  const handleDeliver = ()=>{
    let quantity = item.quantity-1;
    fetch('http://localhost:5000/update/inventory/'+id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const handleStock = ()=>{
    let quantity = item.quantity+parseInt(stock);
    fetch('http://localhost:5000/update/inventory/'+id, {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({  quantity }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }


  return (
    <div className="inventory container mt-3">
      <div className="row">
        <div className="col-md-6">
          <img className='inventoryImg card' src={item.imgURL} alt="" />
        </div>
        <div className="col-md-6 inventoryDetailes">
          <div className="card">
            <div className="card-header text-center ">
              <h3>{item.name}</h3>
            </div>
            <div className="card-body m-3">
              <div className="card-text">{item.desc}</div>
              <div className="row m-3 justify-content-center">
              <div className="col-4 d-flex justify-content-between"><b>Supplier</b><b>:</b></div>
              <div className="col-4">{item.supplier}</div>
              </div>
              <div className="row m-3 justify-content-center">
                <div className="col-4 d-flex justify-content-between"><b>Price</b><b>:</b></div>
                <div className="col-4">{item.price}</div></div>
              <div className="row m-3 justify-content-center">
              <div className="col-4 d-flex justify-content-between"><b>Quantity</b><b>:</b></div>
              <div className="col-4">{item.quantity}</div>
              </div>
            </div>
            <div className="card-footer text-center">
            <button onClick={handleDeliver} className="btn btn-success btn-sm">Delivered</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-md-3 ">
          <div className="card">
            <div className="card-header  text-center">
             <h5>Restock the items</h5>
            </div>
            <div className="card-body">
                <input type="number" className="form-control" placeholder='Enter the numbers' onChange={(e) => setStock(e.target.value)}/>
               <div className='text-center mt-3'>
               <button onClick={handleStock} className="btn btn-block btn-sm btn-success text-center">Add</button>
               </div>
               
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Inventory;