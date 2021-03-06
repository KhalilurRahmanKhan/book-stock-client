import './contact.css';

function Contact() {
  return (
    <div className="">
        <div className="row justify-content-center ">
            <h3 className="text-center mb-5">Contact Us</h3>

            <div className="col-md-5 contact ">
            <div className="form-floating">
                <input type="email" className="form-control" />
                <label >Email</label>
                </div><br />
                
                <div className="form-floating">
                <textarea rows='10' className='form-control text-area' ></textarea>
                <label >Comments</label>
                </div><br />
                <div className='text-end'>
                <button className=" btn btn-primary float-left" type="submit">Submit</button>
                </div>
              
            </div>
        </div>
    </div>
  );
}

export default Contact;