import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./registrationForm.module.css";
function RegistrationForm() {
  const navigate = useNavigate();
  const [formVal,setformVal] = useState({
    name: '',
    username:'',
    email:'',
    mobile:'',
    checkbox:false,
  })
  const [nameErr,setnameErr]=useState(false)
  const[usernameErr,setusernameErr]= useState(false)
  const[mailErr,setmailErr]=useState(false)
  const[mobileErr,setmobileErr] = useState(false)
  const[checkboxErr,setcheckboxErr] = useState(false)
  const handleChange= (e)=>{
    setformVal({...formVal,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    let valid =true
    e.preventDefault()
    if(!(formVal.name.trim().length>0)){
      setnameErr(true)
      valid=false
    }else{
      setnameErr(false)
    }
    if(!(formVal.username.trim().length>0)){
      setusernameErr(true)
      valid=false
    }else{
      setusernameErr(false)
    }
    if(!(formVal.email.trim().length>0)){
      setmailErr(true)
      valid=false
    }else{
      setmailErr(false)
    }
    if(!(formVal.mobile.trim().length>0)){
      setmobileErr(true)
      valid=false
    }else{
      setmobileErr(false)
    }
    if (!formVal.checkbox){
      setcheckboxErr(true)
      valid=false
    }else{
      setcheckboxErr(false)
    }
    if(valid){
     setTimeout(() => {
      navigate("/genres")
      // window.localStorage.setItem("registereData", JSON.stringify(formVal));
     }, 500);
    }
  }
  return (
    <div className={styles.formcontainer}>
      <div className={styles.superlogo}>Super app</div>
      <p>Create your account</p>
      <form>
        <input type="text" name="name" placeholder="Name" onChange={(e)=>handleChange(e)}/>
        {
          nameErr? <p className={styles.error} >Field is required</p> :<></>
        }
        <input type="text" name="username" placeholder="Username" onChange={(e)=>handleChange(e)}/>
        {
          usernameErr? <p className={styles.error} >Field is required</p> :<></>
        }
        <input type="email" name="email" placeholder="Email" onChange={(e)=>handleChange(e)}/>
        {
          mailErr? <p className={styles.error} >Field is required</p> :<></>
        }
        <input type="text" inputMode="numeric" name='mobile' placeholder="Mobile" onChange={(e)=>handleChange(e)}/>
        {
          mobileErr? <p className={styles.error} >Field is required</p> :<></>
        }
        <label>
          <input type="checkbox" name="checkbox" onChange={(e) =>
              setformVal({
                ...formVal,
                [e.target.name]: e.target.checked,
              })
            } /> Share my registration data
          with Superapp
        </label>
        {
          checkboxErr? <p className={styles.error} >Check this box if you want to proceed</p> : <></>
        }
        <button type="submit"onClick={((e)=>handleSubmit(e))} >SIGN UP</button>
        <footer>
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </footer>
      </form>
    </div>
  );
}

export default RegistrationForm;
