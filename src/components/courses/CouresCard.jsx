import React from 'react'
import Image from "./ccnp.png";
import Image1 from "./ccnp.png";
import Image2 from "./mbreparing.jpg";
import Image3 from './python.jpg'
import Image4 from './techno.jpg'

export default function CouresCard({src,title}) {
  return (
    <>


    <div className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src={src} alt="Card image cap" />
         <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
    </div>

    </>
  )
}
