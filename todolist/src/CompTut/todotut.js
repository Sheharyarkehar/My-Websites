import React,{useState} from 'react'
import './styling.css'
function Todotut() {
 const [myList, InsertItems] = useState([])
const [newList, newlistItem] = useState([])
 var UpdateItems=(event)=>{
InsertItems(event.target.value)


 }
 var setItems=()=>{

newlistItem((oldItem)=>{

    return [
        ...oldItem,myList
    ]






})
InsertItems("")


 }

var removeItem=(id)=>{

newlistItem((oldItem)=>{


return oldItem.filter((item,index)=>{


    return index!=id
})

})


}

    return (
        <div className="Container">
        <h1>ToDo List</h1> 
        <input type="text" placeholder="Add Items" className="txt" onChange={UpdateItems} value={myList}></input> 
        <button className="btn" onClick={setItems}>+</button>
<ul>
    {newList.map((item,index)=>{
    return(
        <div className="contain">    
            <li>{item}</li>
    <button className="btn1" onClick={()=>{removeItem(index)}}>x</button>
    </div>

    )

    })}

</ul>

        </div>
    )
}

export default Todotut
