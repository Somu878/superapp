import React from 'react'
import Banner from '../components/registration/Banner'
import RegistrationForm from '../components/registration/RegistrationForm'

function Registration() {
  return (
    <div style={{display:'flex'}}>
        <Banner/>
        <RegistrationForm/>
    </div>
  )
}

export default Registration