import React from 'react'
import  './components/Programs.css';
function Programs() {
    const program=[{
         heading:"Strength Training",
         details:"qwertyq2ewrtyghuijjhgfds",
   

    } 
    ,
    {
        heading:"Cardio Training",
        details:"qwertyqwerdftghjkjkjlhgfds",
  

   }
   ,

   {
    heading:"Fat Burning",
    details:"qwertyqwertyuiop[]asdfghjkl;zx",
 

      }

      ,
    {   
        heading:"Health Fitness",
        details:"qwertyasdfghjksdfghjklkfghqwertyasdfghjksdfghjklkfghqwertyasdfghjksdfghjklkfghqwertyasdfghjksdfghjklkfgh",
                
  

   }
    ]
  return (
    <div className='programs'>
    
    <div className="header">
    <h1 className="stroke-text">OUR WORKOUT PLANS</h1>
    </div>

    <div className="program-categories">
    {program.map((e) => (
     <div className="category">
      <div>{e.heading}</div>
       <div className='content'>{e.details}</div> 
      <div className="joinnow">Join now</div>
     </div>))}

    </div>
    </div>
  )
}

export default Programs;
