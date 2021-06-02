import React from "react";
import styles from "./styles.module.css";
import IndividualLoginForm from "./individualLoginForm";
// similar to indivudualLoginForm but with the props that is passed through it, the props print different icons in each input box

function LoginForm() {
  return (
    <div className={styles.indivForm}>
      <IndividualLoginForm iconPic1={"user"} iconPic2={"key"} />
    </div>
  );
}
export default LoginForm;
