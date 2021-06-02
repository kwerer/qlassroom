import SignupForm from "./logupComponents/signupForm";
import LoginPic from "./logupComponents/pic1";
import signUp from "../Images/signUp.jpg";
import Banner from '../landingPage/landingComponents/brand'
import { Divider, Segment } from "semantic-ui-react";
// final signup page that is used to consolidate Singup page

function Signup() {
  return (
    <div>
      <Segment attached="center" inverted color="blue" textAlign="center">
        <Banner />
      </Segment>
      <Divider hidden />
      <LoginPic imagePic={signUp} />
      <SignupForm />
    </div>
  );
}
export default Signup;
