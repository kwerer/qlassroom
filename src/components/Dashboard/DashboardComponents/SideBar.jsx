import React from "react";
import {
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import SideBarPusher from "./SideBarPusher";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function SidebarExampleVisible() {
  return (
    <Container className={styles.MainSideBar} fluid>
      <Sidebar.Pushable as={Segment} attached="right">
        <Sidebar
          as={Menu}
          icon="labeled"
          inverted
          vertical
          visible
          width="thin"
        >
          <Link to="/">
            <Menu.Item as="a">
              <Icon name="home" />
              HOME
            </Menu.Item>
          </Link>
          <Link to="/">
            <Menu.Item as="a">
              <Icon name="calendar" />
              STUDY PLAN
            </Menu.Item>
          </Link>
          <Link to="/">
            <Menu.Item as="a">
              <Icon name="edit" />
              PRACTICE
            </Menu.Item>
          </Link>
          <Link to="/PhysicsQuiz">
            <Menu.Item as="a">
              <Icon name="file alternate" />
              QUIZ
            </Menu.Item>
          </Link>
        </Sidebar>

        <Sidebar.Pusher>
          <SideBarPusher />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Container>
  );
}
