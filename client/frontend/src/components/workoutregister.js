import React from 'react';
import { useState } from 'react'
import Axios from 'axios';

const  Workoutregister=()=> {
   const [workoutField,setworkoutField]=useState({
        planidReg:"",
        plannameReg:"",
        e1Reg:"",
        e2Reg:"",
        e3Reg:"",
   });
   
   const changeworkoutField=(e)=>{
        const name=e.target.name;
        console.log(name);
        const value=e.target.value;
        setworkoutField({...workoutField,[name]:value});
        console.log(workoutField);
   }
   
   const register =()=>{
         Axios.post('http://localhost:3001/workoutregister',{workoutField}).then((response)=>{
              console.log(response);
         });
   }
    
  return (
    <div className='App'>
        <div className='registration'>
            <h1>Register</h1>
            <label>Plan ID</label>
            <input type="text" onChange={(e)=>{
                changeworkoutField(e);
            }} name='planidReg'/>
            <label>Plan Name</label>
            <input type="text" onChange={(e)=>{
                changeworkoutField(e);
            }} name='plannameReg'/>
            <label>Exercise 1</label>
            <input type="text" onChange={(e)=>{
                changeworkoutField(e);
            }} name='e1Reg'/>
            <label>Exercise 2</label>
            <input type="text" onChange={(e)=>{
                changeworkoutField(e);
            }} name='e2Reg'/>
            <label>Exercise </label>
            <input type="text" onChange={(e)=>{
                changeworkoutField(e);
            }} name='e3Reg'/>
            <button onClick={register}>Register</button>
        </div>
    </div>
   );
}

export default Workoutregister;