import React from "react";
import { Image } from "semantic-ui-react";
import backgroundImageright from "../../Images/backgroundImageright.png";
import backgroundImageleft from "../../Images/backgroundImageleft.png";

//2 images in the background, floated left and right
function BackPic() {
  return (
    <>
      <Image src={backgroundImageleft} size="large" floated="left" />
      <Image src={backgroundImageright} size="large" floated="right" />
    </>
  );
}

export default BackPic;
