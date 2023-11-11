import React from 'react'
import './reasons.css'
import whitetick from '../images/whiteTick.png'

export default function reasons() {
  return (
    <div className="reasons">
      <div className="left-r">
       <img src="../images/fc7815fd58a9d67d1bc5b858b4c7ccf6.jpg" alt=""></img>
       <img src="../images/fitness-gym-logo-with-strong-athlete-and-barbell-vector-24189864.jpg" alt=""></img>
       <img src="../images/gym-24699087.webp" alt=""></img>
       <img src="../images/images.jpeg" alt=""></img>
      </div>

      <div className="right-r">
    
        <div>
            <span >WHY </span>
            <span>TO CHOOSE US?</span>
        </div>
        <div className="details-r" >
            

            <div>
                <img src={whitetick}alt="p" />
                <span>OVER 40+ EXPERTS  COACHES</span>
            </div>

            <div>
                <img src={whitetick} alt="p"/>
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span> 
            </div>
            <div>
                 <img src={whitetick}alt="p"/>
                 <span>FREE FIRST PROGRAM</span>
            </div>
            <div>
                <img src={whitetick} alt="p"/>
                <span>RELIABLE PARTNERS</span>
            </div>
        </div>
        </div>
    </div>
  )
}
