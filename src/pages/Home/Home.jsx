import Banner from '../../components/Banner/Banner';
import Items from '../../components/Items/Items';
import Navbar from '../../components/Navbar/Navbar';
import './home.css';

function Home() {
  return (
    <div className="home">
    <Navbar></Navbar>
    <Banner></Banner>
    <Items></Items>
    </div>
  );
}

export default Home;