import './plans.css'
import React from 'react'
import { plansData } from './plansData'
import whitetick from '../images/whiteTick.png'
function plans() {
  return (
    <div className='plans-container'>
        <div className='programs-header' style={{gap:'2rem'}}>
          <span className="stroke-text">GET READY TO START</span>
          <span> YOUR JOURNEY </span>
          <span className="stroke-text">WITH US</span>
        </div>

        <div className="plans">
         {plansData.map((plan,i)=>(
           <div className="plan" key={i}>
            {plan.icon}
            <span className='name'>{plan.name}</span>
            <span className='price'>{plan.price}$</span>
            <div className="features">
              {
                plan.features.map((feature,i)=>(
                    <div className="feature" >
                      <img src={whitetick} alt=""/>
                      <span key={i}>{feature}</span>
                    </div>

                  
                ))

              }
              </div>

              <button className="btn">Join Now</button>
              </div>
            ))}
        </div>
    </div>
  )
}

export default plans
