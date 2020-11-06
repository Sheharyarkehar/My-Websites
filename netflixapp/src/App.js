import React from 'react';
import logo from './logo.svg';
import './App.css';
import sacred from './sacred.jpg'
import river from './Images/riverdale.jpg'
import dark from './Images/darkposter.jpg'
import NetflixDesign from './CompDesign/NetflixDesign'
import ClassArray from './CompDesign/ClassArray'
var vcard=(val)=>{
return(
<NetflixDesign imgsrc={val.imgsrc} name={val.sname} Title="Netflix Original Series" link="https://www.google.com/" />
)

}
function App() {
  return (
    <div className="App">
     {/* <NetflixDesign imgsrc={ClassArray[0].imgsrc} name={ClassArray[0].sname} Title="Netflix Original Series" link="https://www.google.com/"></NetflixDesign>
     {/* <NetflixDesign imgsrc={sacred} name="Sacred" Title="Netflix Original Series" link="https://www.google.com/"></NetflixDesign> */}
     {/* <NetflixDesign imgsrc={river} name="Dark" Title="Netflix Original Series" link="https://www.google.com/"></NetflixDesign> */} 
     {/* <NetflixDesign imgsrc={dark} name="Dark" Title="Netflix Original Series" link="https://www.google.com/"></NetflixDesign> */}
   {ClassArray.map(vcard)}
    


    </div>
  );
}

export default App;
