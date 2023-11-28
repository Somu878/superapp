import React from 'react'
import Profile from '../components/dashboard/profile'
import Weather from '../components/dashboard/weather'
import Timer from '../components/dashboard/Timer'
import Notes from '../components/dashboard/Notes'
import News from '../components/dashboard/News'
function Dashboard() {
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

    </div>
  )
}

export default Dashboard