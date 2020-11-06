import React from 'react'
import Cardscom from './Cardscom'
import Sdata from './mydata'
function Service() {
    return (
        <div>
        <div className="my-5">
        <h1 className="text-center">Our Services</h1>
          
        </div>

        <div className="container-fluid">

            <div className="row">
                 <div className="col-10 mx-auto">
                  <div className="row gy-4">
                      {Sdata.map((val,index)=>{
                       return <Cardscom key={index} imgsrc={val.imgsrc}  title={val.title} />

                      })}
                  </div>
                 </div>

            </div>
        </div>
        </div>
    )
}

export default Service
