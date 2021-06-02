import LoginPic from "./landingComponents/pic1";
import BackPic from "./landingComponents/pic2";
import Banner from './landingComponents/brand'
import { Divider, Segment } from "semantic-ui-react";

export default function Landing() {
  return (
    <div>
      <Segment attached="center" inverted color="blue" textAlign="center">
        <Banner />
      </Segment>
      <Divider hidden />
      <LoginPic />
      <BackPic />
    </div>
  );
}
