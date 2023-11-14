import Navbar from '../components/Navbar'
import Bground from '../components/Bground';
import Programs from '../Programs.jsx';
import Reasons from '../components/reasons';
import Plans from '../components/plans.js';


const Home =()=>{
    
    return(
        <>
        <Navbar/>
        <Bground/>
        <Programs/>
        <br/>
        <br/>
        <br/>
        <Reasons/>
        <Plans/>
        <br/>
        <br/>
        </>
        
    );
}
export default Home;