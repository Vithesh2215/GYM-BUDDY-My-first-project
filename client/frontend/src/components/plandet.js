import React from 'react';
import { useState ,useEffect} from 'react';
import Axios from 'axios';
const Plandet = () => {
const [Plan,setPlan]=useState([{}]);
useEffect(()=>{
    Axios.get('http://localhost:3001/plandet').then((response)=>{
          (setPlan(response.data));
    }).catch((err)=>{console.log(err)});
},[])
  return (
    <div className="container">
    <h3 className=' text-3xl font-semibold mb-4'>Plan Details</h3>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>plan_id</th>
                <th>plan_name</th> 
            </tr>
        </thead>
        <tbody>
            {
                Plan.map((user, i) => {
                    return (
                        <tr key={i}>
                            <td>{user.plan_id}</td>
                            <td>{user.plan_name} </td>
                        </tr>
                    )
                })
            }

        </tbody>
    </table>
    </div>
  )
}
export default Plandet;