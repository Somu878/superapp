import React from 'react'
import profileImg from '..//assets/image 14.png'
function Movies() {
  return (
    <div style={{overflow:'visible'}}>
        <img style={{
            position:'absolute',
            top:'5vh',
            right:'3vw',
            width:'60px',
            height:'60px'
        }} src={profileImg} alt="profile Image" />
        <p style={{
             color: "green",
             fontSize: "45px",
             margin:'30px',
            fontFamily:'var(--singleday)'}}>Superapp</p>
            <p style={{
                marginLeft:'60px',
                fontSize:'30px',
                fontFamily:'var(--dmsans)'
            }}>Entertainment according to your choice</p>
            
    </div>
  )
}

export default Movies