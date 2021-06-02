import React from "react";
import styles from "./styles.module.css";
import { Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logoWhite from "../../Images/logoWhite.jpg";
//top banner at the start of every webpage with logo and brand name
// banner is called at the app.js page as it is located in all pages

export default function Banner() {
  return (
    <Header size="huge" className={styles.header}>
      Qlassroom AI
      <Link to="/">
        <Image
          className={styles.bannerImage}
          src={logoWhite}
          size="mini"
          circular="true"
          floated="left"
          wrapped
        />
      </Link>
    </Header>
  );
}
