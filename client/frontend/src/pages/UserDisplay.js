import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
const UserDisplay = () => {
    const [user,setuser]=useState([{}]);
    const r=useParams().user_id;
    useEffect(()=>{
        Axios.post('http://localhost:3001/userdisplay',{
            user_id:r,
        }).then((response)=>{
            setuser(response.data);
            console.log(response.data);
        }).catch((err)=>{console.log(err)});
    },[]);
  return (
    <>
    <br />
    <label htmlFor="">Username : {user[0].user_name}</label>
    <br />
    <label htmlFor="">Age : {user[0].user_age}</label>
    <br />
    <label htmlFor="">Phone : {user[0].user_phone}</label>
    <br />
    <label htmlFor="">Start Date : {user[0].start_date}</label>
    <br />
    <label htmlFor="">End Date : {user[0].end_date}</label>
    <br />
    <label htmlFor="">Trainer Name : {user[0].trainer_name}</label>
    <br />
    <label htmlFor="">Workout Name : {user[0].plan_name}</label>
    <br />
    <label htmlFor=""> Exercises</label>
    <br />
    {
        user.map((val)=>{
            return(
                <>
                <label htmlFor="">{val.exercise_name}</label>
                <br />
                </>
            )
        })
    }
    </>
    
  )
};
export default UserDisplay;
