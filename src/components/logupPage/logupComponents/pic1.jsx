import React from "react";
import { Image } from "semantic-ui-react";
import styles from "./styles.module.css";
//function is used for login and sign up page image, props called will be for signup or login
function LoginPic(props) {
  return (
    <div className={styles.pic1}>
      <Image src={props.imagePic} size="small" centered />
    </div>
  );
}

export default LoginPic;
