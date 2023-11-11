import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
const Userdetails = () => {
    const [userData, setUSerData] = useState([{}]);
    useEffect(() => {
        fetchData();
    }, [])
  
    const fetchData = async () => {
        try {
            const result = await axios("http://localhost:3001/userlogin");
            console.log(result.data);
            setUSerData(result.data)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }
  return (
    <div>
       
    </div>
  )
}

export default Userdetails