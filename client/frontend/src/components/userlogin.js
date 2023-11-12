import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
const Userlogin = () => {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const login =()=>{
          Axios.post('http://localhost:3001/userlogin',{
                username:username,
                password:password,
          }).then((response)=>{
                console.log(response);

          }).catch((err)=>{console.log(err)});
    }
    
  return (
    <div>
        <div className='login'>
            <h1>Login</h1>
            <input type="text" placeholder="Username..."
                onChange={(e)=>{
                    setusername(e.target.value);
                }}
            />
            <input type="text" placeholder="Password..."
                onChange={(e)=>{
                    setpassword(e.target.value);
                }}
            />
            <button onClick={login}>Login</button>
        </div>
    </div>
  )
}

export default Userlogin