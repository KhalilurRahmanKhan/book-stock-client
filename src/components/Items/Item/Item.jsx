
import './item.css';

function Item() {
  return (
    <div className="col-md-4 mt-3"><div class="card text-center">
    <div class="card-header">
        <h4>name</h4>
    </div>
    <div class="card-body">
        <img src="https://i.ibb.co/3zfRDyG/download.png" alt="" />
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <small>Supplier</small><br />
        <small>quantity</small><br />
        <small>price</small><br />
    </div>
    <div class="card-footer text-muted">
    <a href="#" class="btn btn-primary">Manage</a>
    </div>
    </div>
</div>
  );
}

export default Item;