import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import './styling.css'
function Nodecalling(props) {
    return (
        <div className="col-lg-3 col-md-3 slideNodes">
            <div>
                <h1 className="heading">{props.mytitle}</h1>
                <p className="paragraph"> {props.mydescription} </p>
                   <button>
                       <FontAwesomeIcon icon={faTrash}/>
                   </button>

             </div>
            
        </div>
    )
}

export default Nodecalling
