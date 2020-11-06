import React,{useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './styling.css'

function CreateComp(props) {
    const [node, createnode] = useState([{
title:"",
descrip:""

    }])
var myNode=(event)=>{
var val=event.target.value
var name=event.target.name

createnode((PrevState)=>{

return {...PrevState,
   [name]:val
}


})


}


var InputEvent=()=>{
props.myItem(node)
createnode(()=>{
return{
title:"",
descrip:""

}


})


}

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-3 offset-lg-4 my-5 addcom ">
                    <div>
                      <input placeholder="Title" className="textinp"  name="title" value={node.title} onChange={myNode} />
                       <textarea rows="4" column="30" name="descrip" value={node.descrip} onChange={myNode} placeholder="Add Description" />
                       <button className="ml-5" onClick={InputEvent}>
                           <FontAwesomeIcon icon={faPlus} />

                           </button>                  

                    </div>
                 

                </div>
            </div>
            
        </div>
    )
}

export default CreateComp
