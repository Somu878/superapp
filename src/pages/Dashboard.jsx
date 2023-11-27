import React from 'react'
import Profile from '../components/dashboard/profile'
import Weather from '../components/dashboard/weather'
import Timer from '../components/dashboard/Timer'
function Dashboard() {
  return (
    <div style={{gap:'20px',padding:'50px',display:'flex',flexDirection:'column'}}>
        <Profile/>
        <Weather/>
        <Timer/>
    </div>
  )
}

export default Dashboard