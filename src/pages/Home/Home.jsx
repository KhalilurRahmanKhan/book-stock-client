import Banner from '../../components/Banner/Banner';
import Clients from '../../components/Clients/Clients';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Items from '../../components/Items/Items';
import './home.css';

function Home() {
  return (
    <div className="home">
    <Banner></Banner>
    <Items></Items>
    <Clients></Clients>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default Home;