import React from 'react'
import './Styling.css'
 function NetflixDesign(props) {
    return (
        <div className="Cards">
            <div className="Card">
                <img src={props.imgsrc} alt="" className="card_image"></img>
                <div className="card_info">
                    <span className="card_category">{props.Title}</span>
    <h3 className="card_name">{props.name}</h3>
   <a href={props.link}>
       <button>Watch Now</button>
   </a>
                </div>
            </div>
            
        </div>
    )
}
export default NetflixDesign