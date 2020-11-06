import React from 'react'

function Contact() {
    return (
        <div>
       <div className="my-5">
        <h1 className="text-center">Contact Us </h1>
          
        </div> 
        <div className="container contact_div">
        <div className="row">
         <div className="col-md-6 col-10 mx-auto">
         <form>
  <div className="mb-3 text-left">
    <label  className="text-left">Full Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
  </div>
 
  <div className="mb-3 text-left">
    <label >Phone Number</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Number"/>
  </div>
  <div className="mb-3 text-left">
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
 
  <div className="mb-3 text-left">
    <label >Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-outline-primary">Submit</button>
</form>
         </div>

        </div>

        </div>

        </div>
    )
}

export default Contact
