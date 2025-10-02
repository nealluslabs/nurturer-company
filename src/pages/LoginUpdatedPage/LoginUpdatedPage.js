import React from 'react'
import './loginUpdated.css'
import bxNetworkChartSvg from './african-14.jpg'
import accentLogo from './accentLogo.png'
import barcode from './barcode2.png'
import Image from "src/assets/Group-2.png";

import LoginForm from './login-form';
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
/*overlapGroup1: "rectangle-1-1.png",
iconLock: "bx-lock-open-alt-svg-1.png",
iconUser: "bx-user-svg-1.png",*/



const loginPageData = {
 
  spanText1: "Admin Login",
  spanText2: "Email Address",
  spanText3: "Password",
  spanText4: "Login",
  spanText5: "Don't have an account yet?",
  spanText6: "Register here",
  spanText7: "Welcome to CMC Network",
  spanText8: "We're on a mission to help MBE & WBE Contractors grow",
  spanText9: "Connect with other contractors, resources and more in our community.",
  spanText10: "Apply to our foundation program & project matching",
  };


  const{ 
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10
  } = loginPageData








 const  LoginUpdatedPage = () => {
  
 

  return (
    <div className="overall-backround bg-[#FFF6BD]" >
    <div className="container-center-horizontal"  >
    <div className="login-page screen">
    {/* <img src={accentLogo} className = "login-accent-logo"  alt=""/> */}
    
      
      <div className="login-content" >
          <div className="flex w-full items-center justify-center gap-1 ml-4 mt-52">
            <img
              src={Image}
              alt="Bridgetech Logo"
              style={{ maxWidth: "50px", marginTop: "8px" }}
            />
            <p>|</p>
            <h2 className="text-2xl ml-2 text-center font-extrabold">COMPANY LOGIN</h2>
          </div>

       <LoginForm />
       

      {/*Dont Have an account? <Link style={{color:"lightblue"}} to ={'/regTest'}>Register Here.</Link> */}
      </div>
     
    </div>
 




    <div className="overlap-group1 bg-[#20dbe4]">
      
      {/* <div className='intro-box'> */}
        
        <div className ="welcome-barcode">

        <h1> WELCOME TO NURTURER COMPANY</h1>
        </div>

      <div >
         <h1>The AI powered assistant that keeps you in the conversation</h1>
         <ul>
          <li style={{textDecoration:"dotted"}}>Stay Top-Of-Mind</li>
          <li style={{textDecoration:"dotted"}}>Save Time, Close More</li>
          <li style={{textDecoration:"dotted"}}>Never Miss a Lead</li>
         
         </ul>
       </div> 

      {/* </div> */}
   </div>
</div>
</div>
  )
};

export default   LoginUpdatedPage 


  

/* left hand DIV contents - former - there are corresponding styles in the css

 <img className="bx-network-chartsvg" src={bxNetworkChartSvg} alt="bx-network-chart.svg" />
    <div className="flex-col"/>
    <div className="login-to-access josefinsans-bold-black-26px">
    <span className="josefinsans-bold-black-26px">{spanText1}</span>
    </div>
    <div className="overlap-group3">
    <div className="email-address josefinsans-normal-black-16px-2">
    
    <span className="josefinsans-normal-black-16px-2">{spanText2}</span>
    </div>
    <div className="rectangle"></div>
    <img className="icon" src={iconUser} alt="icon-user" />
    </div>
    <div className="overlap-group2">
    <div className="password josefinsans-normal-black-16px-2">
    <span
    className="josefinsans-normal-black-16px-2">{spanText3}</span>
    </div>
    <div className="rectangle"></div>
    <img className="icon" src={iconLock} alt="icon-lock" />
    </div>
    <div className="overlap-group">
    <div className="login josefinsans-bold-white-16px">
    <span className="josefinsans-bold-white-16px">{spanText4}</span>
    </div>
    </div>
    <p className="dont-have-an-accoun josefinsans-normal-black-14px">
    <span className="josefinsans-normal-black-14px">{spanText5}</span>
    <span className="span1">{spanText6}</span>
    </p>
*/


/**
 * right hand  DIV contents former - there are corresponding styles in the css
 * 
 *  <div className="rectangle-2"></div>
    <h1 className="title librebarcode128text-normal-white-60px">
    <span className="librebarcode128text-normal-white-60px">{spanText7}</span>
    </h1>
    <div className="group-1">
    <p className="were-on-a-mission-t josefinsans-bold-white-18px">
    <span className="josefinsans-bold-white-18px">{spanText8}</span>
    </p>

    

<p className="connect-with-other-c josefinsans-normal-white-18px">
<span className="josefinsans-normal-white-18px">{spanText9}</span>
</p>
<p className="apply-to-our-foundat josefinsans-normal-white-18px">
<span
className="josefinsans-normal-white-18px">{spanText10}</span>
</p>
</div>
 */