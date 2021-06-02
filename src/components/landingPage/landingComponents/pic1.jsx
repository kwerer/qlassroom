import React from "react";
import { Grid, Image } from "semantic-ui-react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import loginImage from "../../Images/loginImage.jpg";
import signUp from "../../Images/signUp.jpg";

//Middle section of landing page
// <div> Guiding words
//<Grid> encloses images which links to log in and register pages
const LoginPic = () => (
  <div className={styles.loginImgGrp}>
    <div className={styles.loginWords}>Are you a...</div>

    <Grid columns="equal">
      <Grid.Column>
        <Link to="/Signup">
          <Image src={signUp} size="small" floated="right"></Image>
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="/Login">
          <Image src={loginImage} size="small" floated="left"></Image>
        </Link>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginPic;
