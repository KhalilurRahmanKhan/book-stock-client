import Item from './Item/Item';
import './items.css';

function Items() {
  return (
    <div className="items container mt-5 mb-5">
        <div className="row justify-content-center" >
          <Item></Item> 
          <Item></Item> 
          <Item></Item> 
          <Item></Item> 
          <Item></Item> 
          <Item></Item> 
        </div>
    </div>
  );
}

export default Items;