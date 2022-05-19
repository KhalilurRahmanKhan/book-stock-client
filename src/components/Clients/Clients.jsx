import './clients.css';
//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


//Owl Carousel Settings
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    navText: ["", ""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    },
  };

function Clients() {
  return (
    <div className="clients">
        <h3 className='text-center mb-5'>Our Clients</h3>
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                      <div class="item"><img src="https://i.ibb.co/3zfRDyG/download.png"/></div>
                      <div class="item"><img src="https://i.ibb.co/vYBVvcb/book-store-logo-template-6543-230.webp"/></div>
                      <div class="item"><img src="https://i.ibb.co/zn7x43k/download.png"/></div>
                      <div class="item"><img src="https://i.ibb.co/K293jKM/download.jpg"/></div>
                      <div class="item"><img src="https://i.ibb.co/3zfRDyG/download.png"/></div>
                      <div class="item"><img src="https://i.ibb.co/zn7x43k/download.png"/></div>
                      <div class="item"><img src="https://i.ibb.co/K293jKM/download.jpg"/></div> 
                </OwlCarousel>
    </div>
  );
}

export default Clients;