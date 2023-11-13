import React from 'react'
import Axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
const TrainerDisplay = () => {
    const r=useParams().trainer_id;
    const [trainer,settrainer]=useState([{}]);
    useEffect(()=>{
        Axios.post('http://localhost:3001/trainerdisplay',{
            trainer_id:r,
        }).then((response)=>{
            settrainer(response.data);
            console.log(response.data);
            console.log(trainer)
        }).catch((err)=>{console.log(err)});
    },[]);
  return (
    <>
    
    <br />
    <label htmlFor=""> Username : {trainer[0].trainer_name}</label>
    <br />
    
    <label htmlFor="">Phone : {trainer[0].trainer_phno}</label>
    <br />
    <label htmlFor=""> Customer Details</label>
    <br />
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Username</th>
                <th>Phone number</th>
                <th>Age</th>
                <th>Start date</th>
                <th>End date</th>
                
            </tr>
        </thead>
        <tbody>
            {
                trainer.map((user, i) => {
                    return (
                        <tr key={i}>
                            <td>{user.user_name}</td>
                            <td>{user.user_phone} </td>
                            <td>{user.user_age} </td>
                            <td>{user.start_date}</td>
                            <td>{user.end_date}</td>
                            
                        </tr>
                    )
                })
            }

        </tbody>
    </table>
    </>
  )
}

export default TrainerDisplay