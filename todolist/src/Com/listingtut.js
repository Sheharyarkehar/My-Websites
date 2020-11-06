import React, { useState } from 'react'
import './styling.css'
function Listingtut() {
var [item,ChangeItems]=useState("")
var [listof,ChangeItems1]=useState([])

var AdItems=(event)=>{
ChangeItems(event.target.value)
}
var UpdateItems=()=>{
    ChangeItems1((olditem)=>{

        return[...olditem,item]
    });
    ChangeItems("")
    }
    var deleteItems=(id)=>{

        ChangeItems1((olditem)=>{
return olditem.filter((arrEl,index)=>{
return index!=id

})
        })

    }
    
    return (
        <div className="Container">
        <h1>ToDo List</h1> 
        <input type="text" placeholder="Add Items" className="txt" onChange={AdItems} value={item}></input> 
        <button className="btn" onClick={UpdateItems}>+</button>
        
        <ul>
    {listof.map((items,index)=>{

return(
    <div className="contain">
    
<li>{items}</li>
<button className="btn1" onClick={()=>{deleteItems(index)}}>x</button>
</div>
)

    })}
            </ul>
            
        </div>

    )
}

export default Listingtut

