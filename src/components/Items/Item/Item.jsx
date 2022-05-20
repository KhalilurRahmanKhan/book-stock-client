
import { Link } from 'react-router-dom';
import './item.css';

function Item() {
  return (
    <div className="col-md-4 mt-3"><div className="card text-center">
    <div className="card-header">
        <h4>name</h4>
    </div>
    <div className="card-body">
        <img src="https://i.ibb.co/1ZcN5cq/download.png" alt="" />
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <small>Supplier</small><br />
        <small>quantity</small><br />
        <small>price</small><br />
    </div>
    <div className="card-footer text-muted">
    <Link to="inventory/:id" className="btn btn-primary">Manage</Link>
    </div>
    </div>
</div>
  );
}

export default Item;