import React from 'react'
import './styling.css'
import web from '../images/rocket.png'
import { NavLink } from 'react-router-dom'
function Common(props) {
    return (
     
              <section id="header" className="d-flex align-items-center">
           <div className="container-fluid">
               <div className="row">
                  <div className="col-10 mx-auto">
                      <div className="row">
                    <div className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column " >

                        <h1>{props.firstHeading} <strong className="brand-name"> The Techvalley</strong></h1>
                        <h2 className="my-3">We are the Team of Talented devleopers making websites
                        </h2>
                    <div className="mt-3">
                        <NavLink to={props.nLink} className="btn-get-started">{props.buttonHeading}</NavLink>
                    </div>
                    </div>

                  
                     <div className="col-lg-6 order-1 order-lg-2 header-img imgcon" >
                         <img src={web} className="img-fluid animated" alt="homeImg" />
                     </div>
                     </div>
                      </div>
               </div>



           </div>
        </section>

     
    )
}

export default Common
