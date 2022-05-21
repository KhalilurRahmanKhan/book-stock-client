import './addinventory.css';

function AddInventory() {
  return (
    <div className="addinventory container card col-md-6 mt-5 mb-5">
      <h3 className='text-center'>Add new inventory</h3>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder='ID'/>
        </div>
        <div className="col-md-8">
        <input type="text" className="form-control"  placeholder='Name'/>
        </div>
      </div>
      <input type="text" className="form-control mt-3" placeholder='Image URL'/>
      <textarea name="" id="" cols="30" rows="8" className="form-control mt-3" placeholder='Description'></textarea>
      <div className="row">
        <div className="col-md-3">
          <input type="text" className="form-control mt-3" placeholder='Price'/>
        </div>
        <div className="col-md-3">
        <input type="text" className="form-control mt-3"  placeholder='Quantity'/>
        </div>
        <div className="col-md-6">
        <input type="text" className="form-control mt-3"  placeholder='Supplier name'/>
        </div>
      </div>

      <div className='text-end m-3'>
        <button className='btn btn-primary'>Add</button>
      </div>
   
    </div>
  );
}

export default AddInventory;