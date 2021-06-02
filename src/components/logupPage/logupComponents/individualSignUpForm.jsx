import { Button, Form, Grid } from "semantic-ui-react";
import Axios from "axios";
import { useState } from "react";
import ShowPassword2 from "./showPassword2";
import ShowPassword3 from "./showPassword3";
//input boxes for sign up forms, includes 1. function for show and hide password 2. printing of values on the console
// called at signup together with image

function IndividualSignUpForm(props) {
  const [name, setName] = useState({});

  function handleChangeUsername(event) {
    setName({
      username: event.target.value,
    });
  }

  function handleChangePassword(event) {
    setName({
      ...name,
      password: event.target.value,
    });
  }
  function handleChangeRePassword(event) {
    setName({
      ...name,
      RePassword: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      name: name,
    };

    Axios.post(`http://jsonplaceholder.typicode.com/users`, { user }).then(
      (res) => {
        console.log(res);
        console.log(res.data);
      }
    );
  }
  return (
    <Grid centered>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          size="large"
          icon={props.iconPic1}
          iconPosition="left"
          type="text"
          onChange={handleChangeUsername}
          placeholder="Email"
        />
        <Form.Input
          size="large"
          id="myInput2"
          icon={props.iconPic2}
          iconPosition="left"
          type="password"
          onChange={handleChangePassword}
          placeholder="Password"
          action={{
            icon: "eye",
            onClick: ShowPassword2,
            type: "button",
          }}
          actionPosition="right"
        />
        <Form.Input
          size="large"
          id="myInput3"
          icon={props.iconPic2}
          iconPosition="left"
          type="password"
          onChange={handleChangeRePassword}
          placeholder="Re-enter Password"
          action={{
            icon: "eye",
            onClick: ShowPassword3,
            type: "button",
          }}
          actionPosition="right"
        />

        <Button
          type="submit"
          icon="play"
          floated="right"
          circular
          color="purple"
        ></Button>
      </Form>
    </Grid>
  );
}

export default IndividualSignUpForm;
