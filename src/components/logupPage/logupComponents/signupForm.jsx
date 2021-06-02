import React from "react";
import styles from "./styles.module.css";
import IndividualSignUpForm from "./individualSignUpForm";
// similar to indivudualLoginForm but with the props that is passed through it, the props print different icons in each input box

function SignupForm() {
  return (
    <div className={styles.indivForm}>
      <IndividualSignUpForm iconPic1={"user"} iconPic2={"key"} />
    </div>
  );
}
export default SignupForm;
