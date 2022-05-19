import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import './home.css';

function Home() {
  return (
    <div className="home">
    <Navbar></Navbar>
    <Banner></Banner>
    </div>
  );
}

export default Home;