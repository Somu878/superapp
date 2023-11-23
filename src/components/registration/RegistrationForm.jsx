import React from "react";
import styles from "./registrationForm.module.css";
function RegistrationForm() {
  return (
    <p className={styles.formcontainer}>
      <div className={styles.superlogo}>Super app</div>
      <p>Create your account</p>
      <form>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" inputMode="numeric" placeholder="Mobile" />
        <label>
          <input type="checkbox" name="checkbox" /> Share my registration data
          with Superapp
        </label>
        <button type="submit">SIGN UP</button>
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
    </p>
  );
}

export default RegistrationForm;
