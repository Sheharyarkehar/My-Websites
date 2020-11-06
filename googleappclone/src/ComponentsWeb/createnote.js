import React,{useState} from 'react'
import './styling.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Createnote(props) {
  const [expand, setexpand] = useState(false)
const [noteplus, setNote] = useState(
{
  // title :"",
  content :"",
  tit:"",
}
);
const InputEvent=(event)=>{
var name=event.target.name
  var value=event.target.value
setNote((prevNote)=>{
return{

  ...prevNote,
  [name]:value,
}
});


}
const Expandit=()=>{

setexpand(true)

}

const Contractit=()=>{

  setexpand(false)
}
const addEvent=()=>{
props.passNote(noteplus)
setNote({
  // title :"",
  content :"",
  tit:"",

})
}

    return (
      <div className="container-fluid mt-5">
      <div className="row">
              <div className="col-lg-4 col-md-4 col-12 offset-4 note">
              
         {    expand?
               <input type="text" name="tit" value={noteplus.tit} onChange={InputEvent} placeholder="Title" className="mb-1 float-left mt-1" ></input>
                : null}
                 <br/>
                 <textarea rows="4" column="30" name="content" placeholder="Write a note" value={noteplus.content} onChange={InputEvent} className="float-left mt-3" onClick={Expandit} onDoubleClick={Contractit}></textarea>
                {/* <input type="text" name="tit" value={noteplus.tit} onChange={InputEvent} placeholder="tit" class></input> */}
                {    expand?
                <input type="submit" className="buttonadd" onClick={addEvent} value="+" />
          :null}
               {/* </div>
               </div> */}
              </div>
              </div>
      </div>
    )
}

export default Createnote
