import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import './ComponentsWeb/styling.css'
import Header from './Compwebs/header'
import createComp from './Compwebs/createComp'
import CreateComp from './Compwebs/createComp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nodecalling from './Compwebs/nodecalling'
// import Headercom from './ComponentsWeb/headercom'
// import Createnote from './ComponentsWeb/createnote'
// import Newnodecom from './ComponentsWeb/newnodecom'
function App() {

  const [item, addItem] = useState([])


var myaddItem=(node)=>{

addItem((prevNode)=>{
return[...prevNode,node]


})
console.log(node)
console.log(item)
}

// const [additem, setadditem] = useState([])
// const addNote=(note1)=>{

//   setadditem((prevItem)=>{


//     return [...prevItem,note1]
//   })
//   console.log(note1)
  
//   // console.log('yyy')
// }
// const Delete=(id)=>{
//   setadditem((oldata)=>{
// return oldata.filter((currdata,idex)=>{

//   return idex!==id;
// })

//   })
//   console.log(additem)

// }
  return (
    <div className="App">
      {/* <Headercom/>
     
      <Createnote passNote={addNote} />
      <div className="container-fluid mt-5 mycon">
          <div className="row">
      {
       
      additem.map((val,index)=>{

        return (
          
          <Newnodecom key={index} id={index} tit={val.tit} content={val.content} dlte={Delete} ></Newnodecom>
         
          
        )
      })}
       </div>
          </div> */}


<Header/>
<CreateComp myItem={myaddItem}/>

<div className="container">
<div className="row"> 


{item.map((i,index)=>{

return <Nodecalling mytitle={i.title} mydescription={i.descrip}  id={index}/>


})}

</div>
</div>
    </div>
  );
}

export default App;
