
import React from 'react';
import { useState } from 'react';
import './adminpage.css';
import Traindet from './traindet';
import Userdet from './userdet';
import { Link } from 'react-router-dom';
import Plandet from './plandet';
import Exdet from './exdet';
const Adminpage = () => {
    const[traindet,settraindet]=useState(true);
    const[services,setServices]=useState(false);
    const[clients,setClients]=useState(false);
    const[contact,setContact]=useState(false);
    const[plans,setplans]=useState(false);
    const[exercise,setexercise] =useState(false);
    const changetraindet=()=>{
        settraindet(true);
        setServices(false);
        setClients(false);
        setContact(false);
        setplans(false);
        setexercise(false);
    }
    const changeserv=()=>{
        settraindet(false);
        setServices(true);
        setClients(false);
        setContact(false);
        setplans(false);
        setexercise(false);
    }
    const changeclient=()=>{
        settraindet(false);
        setServices(false);
        setClients(true);
        setContact(false);
        setplans(false);
        setexercise(false);
    }
    const changecontact=()=>{
        settraindet(false);
        setServices(false);
        setClients(false);
        setContact(true);
        setplans(false);
        setexercise(false);
    }
    const changeplan=()=>{
      settraindet(false);
        setServices(false);
        setClients(false);
        setContact(false);
        setplans(true);
        setexercise(false);
    }

    const changeexercise=()=>{
      settraindet(false);
        setServices(false);
        setClients(false);
        setContact(false);
        setplans(false);
        setexercise(true);
    }
    

  return (
    <div className='main'>
      <div className="total">
        <div id="mySidebar" className="sidebar">
        <button onClick={changetraindet}>Trainer Details</button>
        <button onClick={changeclient}>User Details</button>
        <button onClick={changeplan}>Workout Plan Details</button>
        <button onClick={changeexercise}>Exercise Details</button>

        <Link to={"/trainerregister"}><button onClick={changeserv}>Add Trainer</button></Link>
        <Link to={"/workoutregister"}><button onClick={changecontact}>Add Workout Plan</button></Link>
        </div>
        <div className="main">
              {traindet && <Traindet/>}
              {clients && <Userdet/>}
              {plans && <Plandet/>}
              {exercise &&<Exdet/>}
              {services && <h2>Add Trainer</h2>}
              {contact && <h2>Contact</h2>}
        </div>
        </div>
    </div>
  );
};

export default Adminpage;