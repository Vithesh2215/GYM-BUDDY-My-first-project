import React from 'react'
import Axios from 'axios'
import { useEffect,useState } from 'react';
const Exdet = () => {
    const [ex,setex]=useState([{}]);
    useEffect(()=>{
        Axios.get('http://localhost:3001/exdet').then((response)=>{
              (setex(response.data));
        }).catch((err)=>{console.log(err)});
    },[])
      return (
        <div className="container">
        <h3 className=' text-3xl font-semibold mb-4'>Exercise Details</h3>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>plan_name</th>
                    <th>exercise_name</th> 
                </tr>
            </thead>
            <tbody>
                {
                    ex.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{user.plan_name}</td>
                                <td>{user.exercise_name} </td>
                            </tr>
                        )
                    })
                }
    
            </tbody>
        </table>
        </div>
      )
}

export default Exdet