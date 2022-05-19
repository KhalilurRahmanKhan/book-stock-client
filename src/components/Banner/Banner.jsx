
import './banner.css';
import bookStock from "../../images/book-stock.webp";

function Banner() {
  return (
    <div className="banner">
        <img src={bookStock} className="img-fluid banner-img" alt="book stock"></img>
    </div>
  );
}

export default Banner;