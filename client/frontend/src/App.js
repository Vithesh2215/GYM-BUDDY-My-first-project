import logo from './logo.svg';
import './App.css';

import {Routes,Route ,BrowserRouter,Switch} from "react-router-dom";
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';
import TrainerLogin from './pages/TrainerLogin';
import UserDetails from './pages/UserDetails';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/userlogin" element={<UserLogin/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/trainerlogin" element={<TrainerLogin/>}/>
      <Route path="/userdetails" element={<UserDetails/>}/>

      </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
