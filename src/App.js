import './App.css';
import Countdown from './comp/Countdown';
import logo from "./bg/logo1.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";

function App() {
  return (
  <main className="container">

<div className='bgImg'>
    </div>
    <div className="content">
    <img src={logo} alt="logo"  className='logoImg'/>
      <div className='paragraphe'>
      <p className="text1">
          <span style={{ color:"#B81C17" }}>THIS WEBSITE IS</span><span style={{ color:"#01A296" }}> UNDER CONSTRUCTION</span>
          </p>
          <p className='text2'>
          we are preparing to serve you better
          stay Tuned.
          </p>

          <div className='countdown'>
        <Countdown/>
        <ul className='socialMedia'>
        <li><a href="#"><FaFacebook /></a></li>
        <li><a href="#"><FaLinkedin /></a></li>
        <li><a href="#"><BiSolidMessageRounded /></a></li>
        <li><a href="#"><AiFillGoogleCircle /></a></li>
        </ul>

      </div>

    
          
      </div>

   

      

     
</div>
  


  </main>

  );
}

export default App;
