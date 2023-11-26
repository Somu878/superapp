import React from 'react'
import Profile from '../components/dashboard/profile'
import Weather from '../components/dashboard/weather'
function Dashboard() {
  return (
    <div style={{gap:'20px',padding:'60px',display:'flex',flexDirection:'column'}}>
        <Profile/>
        <Weather/>
    </div>
  )
}

export default Dashboard