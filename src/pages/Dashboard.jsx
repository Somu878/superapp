import React from 'react'
import Profile from '../components/dashboard/Profile'
import Weather from '../components/dashboard/Weather'
import Timer from '../components/dashboard/Timer'
import Notes from '../components/dashboard/Notes'
import News from '../components/dashboard/News'
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const handleBrowsebtn =()=>{
   setTimeout(() => {
    navigate("/movies")
   }, 500);
  }
  return (
    <div style={{padding:'50px'}}>
    <div style={{gap:'20px',display:'flex'}}>
        <div>
        <Profile/>
        <Weather/>
        <Timer/>
        </div>
        <div><Notes/></div>
        <div><News/></div>
    </div>
    <button style={{position: "absolute",
          bottom: "2vh",
          right:'100px',
          background: "green",
          border: "none",
          color: "white",
          padding: "6px",
          width:'130px',
          height:'35px',
          borderRadius: "12px",}} onClick={handleBrowsebtn}>Browse</button>

    </div>
  )
}

export default Dashboard