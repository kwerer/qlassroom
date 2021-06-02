import React from "react";
import { Divider, Segment } from "semantic-ui-react";
import Banner from './brand'
function ForgotPassword() {
  return (
  <div><Segment attached="center" inverted color="blue" textAlign="center">
  <Banner />
</Segment>
<Divider hidden /><h1>Forgot Password Page</h1></div>);
}

export default ForgotPassword;
