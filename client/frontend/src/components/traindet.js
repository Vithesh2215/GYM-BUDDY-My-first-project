import React from 'react';
import { useState ,useEffect} from 'react';
import Axios from 'axios';
const Traindet = () => {
const [Train,setTrain]=useState([{}]);
useEffect(()=>{
    Axios.get('http://localhost:3001/traindet').then((response)=>{
          (setTrain(response.data));
    }).catch((err)=>{console.log(err)});
},[])
  return (
    <div className="container">
    <h3 className=' text-3xl font-semibold mb-4'>Trainer Details</h3>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>trainer_id</th>
                <th>trainer_name</th>
                <th>trainer_phno</th>
                <th>experience</th>
                <th>trainer_rating</th>
                <th>gender</th>
            </tr>
        </thead>
        <tbody>
            {
                Train.map((user, i) => {
                    return (
                        <tr key={i}>
                            <td>{user.trainer_id}</td>
                            <td>{user.trainer_name} </td>
                            <td>{user.trainer_phno} </td>
                            <td>{user.experience}</td>
                            <td>{user.trainer_rating}</td>
                            <td>{user.gender}</td>
                        </tr>
                    )
                })
            }

        </tbody>
    </table>
    </div>
  )
}
export default Traindet;