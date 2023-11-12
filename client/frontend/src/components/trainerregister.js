import React from 'react';
import { useState } from 'react'
import Axios from 'axios';

const  Trainerregister=()=> {
   const [trainerField,settrainerField]=useState({
        trainerReg:'',
        traineruseridReg:'',
        trainerpassReg:'',
        trainerphoneReg:'',
        trainergenderReg:'',
        trainerratingReg:'',
        trainerexperienceReg:'',
   });
   
   const changetrainerField=(e)=>{
        const name=e.target.name;
        console.log(name);
        const value=e.target.value;
        settrainerField({...trainerField,[name]:value});
        console.log(trainerField);
   }
   
   const register =()=>{
         Axios.post('http://localhost:3001/trainerregister',{trainerField}).then((response)=>{
              console.log(response);
         });
   }
    
  return (
    <div className='App'>
        <div className='registration'>
            <h1>Register</h1>
            <label>Trainer ID</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='traineruseridReg'/>
            <label>Trainer User</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainerReg'/>
            <label>Password</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainerpassReg'/>
             <label>Phone Number</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainerphoneReg'/>
             <label>Gender</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainergenderReg'/>
             <label>Rating</label>
            <input type="text" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainerratingReg'/>
             <label>Experience</label>
            <input type="date" onChange={(e)=>{
                changetrainerField(e);
            }} name='trainerexperienceReg'/>
            
            <button onClick={register}>Register</button>
        </div>
    </div>
   );
}

export default Trainerregister;