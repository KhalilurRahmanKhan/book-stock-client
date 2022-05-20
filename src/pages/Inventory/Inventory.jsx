import './inventory.css';

function Inventory() {
  return (
    <div className="inventory container mt-3">
      <div className="row">
        <div className="col-md-6">
          <img className='inventoryImg card' src="https://i.ibb.co/LPrChwW/slide1.jpg" alt="" />
        </div>
        <div className="col-md-6 inventoryDetailes">
          <div className="card">
            <div className="card-header text-center ">
              <h3>dsfgdefghd</h3>
            </div>
            <div className="card-body m-3">
              <div className="card-text">Lorem ipsum, dol aenderit nihil necessitaum, dolor sit amet consectetur adipisicing elit. Saepe temporibus sunt dignissimos atque reprehenderit nihil necessitatibus molestias reiciendis at quis!</div>
              <div className="row m-3 justify-content-center">
              <div className="col-4 d-flex justify-content-between"><b>deghdg</b>            <b>    :</b></div>
              <div className="col-4">fgjrfyjrfyj</div>
              </div>
              <div className="row m-3 justify-content-center">
                <div className="col-4 d-flex justify-content-between"><b>deghdg</b>            <b>    :</b></div>
                <div className="col-4">fgjrfyjrfyj</div>              </div>
              <div className="row m-3 justify-content-center">
              <div className="col-4 d-flex justify-content-between"><b>deghygjnhfrdg</b>            <b>    :</b></div>
              <div className="col-4">fgjrfyjrfyj</div>
              </div>
            </div>
            <div class="card-footer text-center">
            <a href="#" class="btn btn-success btn-sm">Delivered</a>
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
                <input type="text" className="form-control" placeholder='Enter the numbers' />
               <div className='text-center mt-3'>
               <button className="btn btn-block btn-sm btn-success text-center">Add</button>
               </div>
               
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Inventory;