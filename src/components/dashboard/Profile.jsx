import React from 'react'
import profileImage from '..//../assets/image 15.png'
function Profile() {
  return (
    <div style={{
      display:'flex',
      width:'30vw',
      height:'33vh',
      borderRadius:'15px',
      background:'#5746EA',
      padding:'20px',
      gap:'30px'
    }}>
      <img style={{height:'35vh',position:'relative',bottom:'0.5vh',width:'8vw'}} src={profileImage} alt="ProfileImage" />
      <div style={{display:'flex',flexDirection:'column',gap:"2px"}}>
        <span style={{color:"white",fontFamily:"var(--dmsans)",fontSize:"19.5px"}}>test name</span>
        <span  style={{color:"white",fontFamily:"var(--dmsans)",fontSize:"20.5px"}} >test@gmail.com</span>
        <span style={{color:"white",fontFamily:"var(--dmsans)",fontSize:"40px"}}>testuname</span>
      </div>
    </div>
  )
}

export default Profile;