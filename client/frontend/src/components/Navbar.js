import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import Login from '../pages/UserRegister';
export default function Navbar() {

   const [str,setStr]=React.useState('hidden');
   const [toshow ,setToshow]=React.useState(true);

   const handleClick=()=>{
      show();
      setToshow(!toshow);
   }
    
   const show=()=>{
      if (toshow==false){
         setStr('hidden');
      } else {
         setStr('');
      }
   }
  return (
   <div className="nbar">
     <div className="nleft">
       <div className="lname">Gym Buddy</div>
      </div>

      <div className="nmid">
         <div className="midlist">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Our Team</li>
                <li>Contact Us</li>
            </ul>
         </div>

      </div>

      <div className="nright">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
         <div>
         
         <div className={`drop ${str} mt-[190px]`} id='dropdown'>
               <Link to={"/adminlogin"}><button>Admin panel</button></Link>
               <Link to={"/trainerlogin"}><button>Trainer panel</button></Link>
               <Link to={"/userlogin"}><button>User panel</button></Link>
            </div>
            <button className="btn" onClick={handleClick}>Login</button>
         </div>
         <Link to={"/userregister"}><button className="btn"> SignUp</button></Link>
         <a href="#" class="fa fa-facebook"></a>
         <a href="#" class="fa fa-twitter"></a>
         <a href="#" class="fa fa-instagram"></a>
      </div>
   </div>
    
  )
}
