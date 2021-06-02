import { Button, Form, Grid } from "semantic-ui-react";
import Axios from "axios";
import { useState } from "react";
import ShowPassword1 from "./showPassword1";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
//input boxes for log in forms, includes 1. function for show and hide password 2. printing of values on the console
// called at loginPage together with image

function IndividualLoginForm(props) {
  const [name, setName] = useState({});

  function handleChangeUsername1(event) {
    setName({
      username: event.target.value,
    });
  }

  function handleChangePassword1(event) {
    setName({
      ...name,
      password: event.target.value,
    });
  }

  function handleSubmit1(event) {
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
      <Form onSubmit={handleSubmit1}>
        <Form.Input
          size="large"
          icon={props.iconPic1}
          iconPosition="left"
          type="text"
          onChange={handleChangeUsername1}
          placeholder="Username"
        />
        <Form.Input
          size="large"
          id="myInput1"
          icon={props.iconPic2}
          iconPosition="left"
          type="password"
          onChange={handleChangePassword1}
          placeholder="Password"
          action={{
            icon: "eye",
            onClick: ShowPassword1,
            type: "button",
          }}
          actionPosition="right"
        />
        <div className={styles.forgotPword}>
          <Link to="/ForgotPassword">Forgot your Password?</Link>
        </div>
        <div className={styles.purplePlayButton}>
          <Link to="./HomeDashboard">
            <Button
              type="submit"
              icon="play"
              floated="right"
              circular
              color="purple"
            ></Button>
          </Link>
        </div>
      </Form>
    </Grid>
  );
}

export default IndividualLoginForm;
