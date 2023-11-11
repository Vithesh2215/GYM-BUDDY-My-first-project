import React from 'react';
import { useState ,useEffect} from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
const  Userlogin=()=> {
   const [userField,setuserField]=useState({
        userReg:'',
        userpassReg:'',
        userphoneReg:'',
        userageReg:'',
        usergenderReg:'',
        userplanReg:'',
        usertrainerReg:'',
        userdateReg:'',
        userdurReg:'',
   });
   
   const changeuserField=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setuserField({...userField,[name]:value});
        console.log(userField);
   }
   const [username,setusername]=useState('');
   const [password,setpassword]=useState('');
   const [trainerlist,settrainerlist]=useState([{}]);
   const [planlist,setplanlist]=useState([{}]);
   const [userdetails,setuserdetails]=useState([{}]);
   
   useEffect(()=>{
        Axios.get('http://localhost:3001/trainerlist').then((response)=>{
              (settrainerlist(response.data));
              console.log(trainerlist);
        }).catch((err)=>{console.log(err)});
        Axios.get('http://localhost:3001/planlist').then((response)=>{
                (setplanlist(response.data));
                console.log(planlist);
            }).catch((err)=>{console.log(err)});

   },[])

   const register =()=>{
         Axios.post('http://localhost:3001/userregister',userField).then((response)=>{
              console.log(response);
         });
   }
    const login =()=>{
          Axios.post('http://localhost:3001/userlogin',{
                username:username,
                password:password,
          }).then((response)=>{
                setuserdetails(response.data);

          }).catch((err)=>{console.log(err)});
    }
  return (
    <div className='App'>
        <div className='registration'>
            <h1>Register</h1>
            <label>Username</label>
            <input type="text" onChange={(e)=>{
                changeuserField(e);
            }} name='userReg'/>
            <label>Password</label>
            <input type="text" onChange={(e)=>{
                changeuserField(e);
            }} name='userpassReg'/>
             <label>Phone Number</label>
            <input type="text" onChange={(e)=>{
                changeuserField(e);
            }} name='userphoneReg'/>
             <label>Age</label>
            <input type="text" onChange={(e)=>{
                changeuserField(e);
            }} name='userageReg'/>
             <label>Gender</label>
            <input type="text" onChange={(e)=>{
                changeuserField(e);
            }} name='usergenderReg'/>
             <label forHtml="">Plan</label>
             <select name="userplanReg" id="">{
                planlist.map((val,k)=>{
                    return(
                        <option value={val.plan_name} key={val.plan_name}></option>
                    )
                })
             }
             </select>

            {/* <input type="text" onChange={(e)=>{
                changeuserField(e);
            }} name='userplanReg'/> */}
             {/* <label>Trainer</label>
            <input type="text" onChange={(e)=>{
                changeuserField(e);
            }} name='usertrainerReg'/> */}
            <label forHtml="">Trainer</label>
            <select name="usertrainerReg" onChange={(e)=>{
                changeuserField(e);
            }}>
            {
                trainerlist.map((val,k)=>{
                    return (
                        <option value={val.trainer_name} key={k}>{val.trainer_name}</option>
                    )
                })
            }
            </select>
             <label>Start Date</label>
            <input type="date" onChange={(e)=>{
                changeuserField(e);
            }} name='userdateReg'/>
             <label>End date</label>
            <input type="date" onChange={(e)=>{
                changeuserField(e);
            }} name='userdurReg'/>

            <button onClick={register}>Register</button>
        </div>
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
            <Link to={"/userdetails"}><button >Login</button></Link>
        </div>
    </div>
   );
}

export default Userlogin;