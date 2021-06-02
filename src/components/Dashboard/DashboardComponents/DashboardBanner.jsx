import React from "react";
import styles from "./styles.module.css";
import { Grid, Header, Icon, Image, List, Segment } from "semantic-ui-react";
import logoWhite from "../../Images/logoWhite.jpg";
import { Link } from "react-router-dom";

export default function DashboardBanner() {
  return (
    <div className={styles.banner}>
      <Grid padded="horizontally">
        <Grid.Column>
          <Link to="/">
            <Image src={logoWhite} size="mini" className={styles.BannerImage} />
          </Link>
        </Grid.Column>
        <Grid.Column floated="right">
          <Link to="ProfilePage">
            <Icon
              name="user circle outline"
              size="big"
              verticalAlign
              className={styles.BannerIcon}
            />
          </Link>
        </Grid.Column>
      </Grid>
    </div>
  );
}
