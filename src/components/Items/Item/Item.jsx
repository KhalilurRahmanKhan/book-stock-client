
import { Link } from 'react-router-dom';
import './item.css';

function Item({data}) {
  return (
    <div className="col-md-4 mt-3"><div className="card text-center">
    <div className="card-header">
        <h4>{data.name}</h4>
    </div>
    <div className="card-body">
        <img src={data.imgURL} alt="" />
        <p className="card-text">{data.desc.substring(0,40)}</p>
        <small><b>Supplier:</b>{data.supplier}</small><br />
        <small><b>Quantity:</b>{data.quantity}</small><br />
        <small><b>Price: </b>${data.price}</small><br />
    </div>
    <div className="card-footer text-muted">
    <Link to={`inventory/${data._id}`} className="btn btn-primary">Manage</Link>
    </div>
    </div>
</div>
  );
}

export default Item;