import React from 'react'
import './styling.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function Newnodecom(props) {
    const Dltnote=()=>{

        props.dlte(props.id)
    }

    return (
      
              <div className="col-lg-3 col-md-2 col-12  newnote">
              {/* <div className="card">
                <div className="card-body"> */}
               <h1 className="text-left">{props.tit}</h1>
          
            <p className="text-left">{props.content}</p>
               {/* </div>
               </div> */}
               <button className="dlt" onClick={Dltnote}>
               <FontAwesomeIcon icon={faTrash}/>
               </button>
              </div>

         
    )
}

export default Newnodecom
