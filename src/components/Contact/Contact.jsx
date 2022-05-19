import './contact.css';

function Contact() {
  return (
    <div className="">
        <div className="row justify-content-center ">
            <h3 className="text-center mb-5">Contact Us</h3>
            <div className="col-md-4 contact ">
                <input type="email" className='form-control mb-3' placeholder='Enter your email' />
                <textarea name="" id="" cols="30" rows="7" className='form-control' placeholder='Enter your comments'></textarea>
            </div>
        </div>
    </div>
  );
}

export default Contact;