import React from 'react';
import { useState ,useEffect} from 'react'
import Axios from 'axios';
import Navbar from './Navbar';

const  Userregister=()=> {
   const [userField,setuserField]=useState({
        userReg:'',
        userpassReg:'',
        userphoneReg:'',
        userageReg:'',
        usergenderReg:'',
        userplanidReg:'',
        usertraineridReg:'',
        userstartdateReg:'',
        userenddateReg:'',
   });
   
   const changeuserField=(e)=>{
        const name=e.target.name;
        console.log(name);
        const value=e.target.value;
        setuserField({...userField,[name]:value});
        console.log(userField);
   }
   const changeplanId =(e)=>{
    const name="userplanidReg";
    const val=e.target.value;
    console.log("this before changeid set",userField);
    setuserField({...userField,[name]:val});
    console.log(val);
    
    console.log(userField);
   }
   const changetrainerId=(e)=>{
    const name="usertraineridReg";
    const val=e.target.value;
    setuserField({...userField,[name]:val});
   }
   
   const [trainerlist,settrainerlist]=useState([{}]);
   const [planlist,setplanlist]=useState([{}]);
   
   
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
         Axios.post('http://localhost:3001/userregister',{userField}).then((response)=>{
              console.log(response);
         });
   }
    
  return (
    <div className=' bg-cyan-500 h-screen'>
        <Navbar/>
        <div className=' h-[70px] '></div>
        <div className=' flex flex-col gap-4 w-[30%] mx-auto'>
            <h1 className=''> User Register</h1>
            
            <span className=' flex gap-2 justify-center'>
                <label >Username:</label>
                <input type="text" onChange={(e)=>{
                    changeuserField(e);
                }} name='userReg'/>
            </span>

            <span className=' flex gap-2 justify-center'>
                <label>Password:</label>
                <input type="text" onChange={(e)=>{
                    changeuserField(e);
                }} name='userpassReg'/>
            </span>
            
            <span className=' flex gap-2 justify-center'>
                <label>Phone Number:</label>
                <input type="text" onChange={(e)=>{
                    changeuserField(e);
                }} name='userphoneReg'/>
            </span>
            
            <span className=' flex gap-2 justify-center'>
                <label>Age:</label>
                <input type="text" onChange={(e)=>{
                    changeuserField(e);
                }} name='userageReg'/>
            </span>
            
            <span className=' flex gap-2 justify-center'> 
                <label>Gender:</label>
                <input type="text" onChange={(e)=>{
                    changeuserField(e);
                }} name='usergenderReg'/>
            </span>
            
            <span className=' flex gap-2 justify-center'>
                <label forHtml="userplanReg">Plan</label>
                <select name="userplanReg" id="userplanReg" value={userField.userplanidReg} onChange={(e)=>{
                    changeplanId(e);
                }}>
                    
                    <option value="" selected></option>
                    {
                    planlist.map((val,k)=>{
                        return(
                            <option value={val.plan_id} key={val.plan_name} >{val.plan_name}</option>
                        )
                    })
                }
                </select>
            </span>
            
            <span className=' flex gap-2 justify-center'>
                <label forHtml="">Trainer</label>
                <select name="usertrainerReg" value={userField.usertraineridReg} onChange={(e)=>{
                    changetrainerId(e);
                }}>
                    <option value="" selected>

                    </option>
                {
                    trainerlist.map((val,k)=>{
                        return (
                            <option value={val.trainer_id} key={k}>{val.trainer_name}  {val.trainer_phno}</option>
                        )
                    })
                }
                </select>
            </span> 
            
            <span className=' flex gap-2 justify-center'>
                <label>Start Date :</label>
                <input type="date" onChange={(e)=>{
                    changeuserField(e);
                }} name='userstartdateReg'/>
            </span>
           
            <span className=' flex gap-2 justify-center'>
                <label>End date :</label>
                <input type="date" onChange={(e)=>{
                    changeuserField(e);
                }} name='userenddateReg'/>
            </span>
            <div>
            <button onClick={register} className=" px-4 py-2 bg-green-400 hover:bg-green-500 rounded-lg">Register</button>
            </div>
        </div>
    </div>
   );
}

export default Userregister;