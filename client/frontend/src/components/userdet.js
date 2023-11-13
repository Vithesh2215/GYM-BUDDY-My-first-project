import React from 'react';
import { useState ,useEffect} from 'react';
import Axios from 'axios';
const Userdet = () => {
const [User,setUser]=useState([{}]);
useEffect(()=>{
    Axios.get('http://localhost:3001/Userdet').then((response)=>{
          (setUser(response.data));
    }).catch((err)=>{console.log(err)});
},[])
  return (
    <div className="container">
    <h3 className=' text-3xl font-semibold mb-4'>Customer Details</h3>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>user_id</th>
                <th>user_name</th>
                <th>user_age</th>
                <th>user_phone</th>
                <th>plan_id</th>
                <th>gender</th>
                <th>trainer_id</th>
                <th>start_date</th>
                <th>end_date</th>        
            </tr>
        </thead>
        <tbody>
            {
                User.map((user, i) => {
                    return (
                        <tr key={i}>
                            <td>{user.user_id}</td>
                            <td>{user.user_name} </td>
                            <td>{user.user_age} </td>
                            <td>{user.user_phone}</td>
                            <td>{user.plan_id}</td>
                            <td>{user.gender}</td>
                            <td>{user.trainer_id}</td>
                            <td>{user.start_date}</td>
                            <td>{user.end_date}</td>
                        </tr>
                    )
                })
            }

        </tbody>
    </table>
    </div>
  )
}
export default Userdet;