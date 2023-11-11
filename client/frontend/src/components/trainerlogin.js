import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
const Trainerlogin = () => {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');

    const login =()=>{
        Axios.post('http://localhost:3001/trainerlogin',{
              username:username,
              password:password,
        }).then((response)=>{
              if(response.data.message){
               alert(response.data.message);
              }else{
               alert("Login Successful!");
              }
        });
  }
  return (
    <div>
        <div className='login'>
            <h1>Login</h1>
            <input type="text" placeholder="Username..."
                onChange={(e)=>{
                    setusername(e.target.value);}}
            />
            <input type="text" placeholder="Password..."
                onChange={(e)=>{
                    setpassword(e.target.value);}}
            />
            <button onClick={login}>Login</button>
        </div>
    </div>
  )
}

export default Trainerlogin