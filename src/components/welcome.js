import "./welcome.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Welcome = () =>{
   return(
    <>
    <div className="page">
    <div className="navbar" >
        <h1 className="title">TSM</h1>
        <div className="butt">
        <button className="butt1" style={{border:"none"}}>HOME</button>
        <button className="butt2" onClick={()=>window.location.href='/about'} style={{background:"none",border:"none"}}>ABOUT</button>
        <button className="butt3" style={{background:"none",border:"none"}}>CONTACT</button>
        <button className="butt4" style={{background:"none",border:"none"}}>DESTINATION</button>
        </div>
        <button className="login">LOGIN</button>
        <button className="signup">SIGNUP</button>
        <h1 style={{color:"white", fontSize:"40px",position:"relative",top:"-20px"}}>Welcome to TSM </h1>
        <h2 style={{color:"white",position:"relative",top:"-30px"}}>Your Ultimate Travel Companion!</h2>
<button className="start" onClick={() => window.location.href='/dash'}>BEGIN</button>
    </div>
    </div>
    </>
   )
}
export default Welcome;