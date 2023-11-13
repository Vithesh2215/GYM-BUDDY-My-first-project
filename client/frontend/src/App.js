import logo from './logo.svg';
import './App.css';

import {Routes,Route ,BrowserRouter,Switch} from "react-router-dom";
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';
import TrainerLogin from './pages/TrainerLogin';
import UserDetails from './pages/UserDetails';
import UserRegister from './pages/UserRegister';
import TrainerRegister from './pages/TrainerRegister';
import WorkoutRegister from './pages/WorkoutRegister';
import  UserDisplay  from './pages/UserDisplay';
import TrainerDisplay from './pages/TrainerDisplay';
import AdminPage from './pages/AdminPage';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/userlogin" element={<UserLogin/>}/>
      <Route path="/userlogin/:user_id" element={<UserDisplay/>}/>
      <Route path="/trainerlogin/:trainer_id" element={<TrainerDisplay/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/trainerlogin" element={<TrainerLogin/>}/>
      <Route path="/userdetails" element={<UserDetails/>}/>
      <Route path="/userregister" element={<UserRegister/>}/>
      <Route path="/trainerregister" element={<TrainerRegister/>}/>
      <Route path="/workoutregister" element={<WorkoutRegister/>}/>
      <Route path="/adminpage" element={<AdminPage/>}/>
      
      
      </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
