import { Link } from 'react-router-dom';
import Item from './Item/Item';
import './items.css';

function Items({items}) {
  return (
    <div className="items container mt-5 mb-5">
     
        <div className="row justify-content-center" >
          <h3 className='text-center mb-5'>Our Items</h3>
          {

          items.map(item => <Item key={item._id} data={item}> </Item>)
          }
         
          <div className='text-center mt-5'>
            <Link className="btn btn-success" to='manage/inventory'>Manage Inventory</Link>
          </div>
     
        </div>
    </div>
  );
}

export default Items;