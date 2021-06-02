import React from "react";
import LoginForm from "./logupComponents/loginForm";
import LoginPic from "./logupComponents/pic1";
import loginImage from "../Images/loginImage.jpg";
import Banner from '../landingPage/landingComponents/brand'
import { Divider, Segment } from "semantic-ui-react";
//// final login page that is used to consolidate login page

function LoginPage() {
  return (
    <div>
      <Segment attached="center" inverted color="blue" textAlign="center">
        <Banner />
      </Segment>
      <Divider hidden />
      <LoginPic imagePic={loginImage} />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
