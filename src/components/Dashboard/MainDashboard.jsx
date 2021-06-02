import React from "react";
import { Grid, Segment, Image, Container, Divider } from "semantic-ui-react";
import styles from "./DashboardComponents/styles.module.css";
import bgImage from "../Images/logoBlue.jpg";
import Forum from "../Images/Forum.jpg";
import Grades from "../Images/Grades.jpg";
import Practice from "../Images/Practice.jpg";
import Quiz from "../Images/Quiz.jpg";
import Resources from "../Images/Resources.jpg";
import StudyPlan from "../Images/StudyPlan.jpg";
import VideoLesson from "../Images/VideoLesson.jpg";
import Banner from "../landingPage/landingComponents/brand";

export default function MainDashboard() {
  return (
    <div>
      <Segment attached="center" inverted color="blue" textAlign="center">
        <Banner />
      </Segment>
      <Divider hidden />
      <Grid>
        <Grid.Column width={12} className={styles.Dashboard}>
          <Grid.Row>
            <Segment
              padded
              className={styles.PurpleDashboardSegment}
              inverted
              color="purple"
            >
              <h3>DASHBOARD</h3>
            </Segment>
          </Grid.Row>
          <div className={styles.DashboardImages}>
            <Grid columns={4} centered>
              <Grid.Column width={2}>
                <Image src={Practice} size="tiny" />
              </Grid.Column>
              <Grid.Column width={2}>
                <Image src={Quiz} size="tiny" />
              </Grid.Column>
              <Grid.Column width={2}>
                <Image src={VideoLesson} size="tiny" />
              </Grid.Column>
              <Grid.Column width={2}>
                <Image src={Resources} size="tiny" />
              </Grid.Column>
            </Grid>

            <Grid columns={3} centered>
              <Grid.Column width={2}>
                <Image src={StudyPlan} size="tiny" />
              </Grid.Column>
              <Grid.Column width={2}>
                <Image src={Forum} size="tiny" />
              </Grid.Column>
              <Grid.Column width={2}>
                <Image src={Grades} size="tiny" />
              </Grid.Column>
            </Grid>
          </div>
        </Grid.Column>

        <Grid.Column width={3} className={styles.Announcements}>
          <div className={styles.AnnouncementsSegment}>
            <Image src={bgImage} size="tiny" />

            <p className={styles.BlueDashboardSegment}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              nullam egestas quis diam praesent. Purus id imperdiet placerat
              ornare fames sagittis magna feugiat. Id nunc, arcu tellus nam
              egestas eget. Quis odio adipiscing eget turpis justo arcu. Id
              nunc, arcu tellus nam egestas eget. Quis odio adipiscing eget
              turpis justo arcu. Id nunc, arcu tellus nam egestas eget. Quis
              odio adipiscing eget turpis justo arcu.
            </p>
          </div>
        </Grid.Column>
      </Grid>

      <Grid className={styles.MainSecondaryDashboard}>
        <Grid.Column width={12} className={styles.SecondaryDashboard}>
          <Segment
            padded
            className={styles.PurpleDashboardSegment}
            inverted
            color="blue"
          >
            <h3>SECONDARY DASHBOARD</h3>
          </Segment>
        </Grid.Column>

        <Grid.Column width={3} className={styles.SecondaryAnnouncements}>
          <div className={styles.AnnouncementsSegment}>
            <Image src={bgImage} size="tiny" />

            <p className={styles.BlueDashboardSegment}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              nullam egestas quis diam praesent. Purus id imperdiet placerat
              ornare fames sagittis magna feugiat. Id nunc, arcu tellus nam
              egestas eget. Quis odio adipiscing eget turpis justo arcu. Id
              nunc, arcu tellus nam egestas eget. Quis odio adipiscing eget
              turpis justo arcu. Id nunc, arcu tellus nam egestas eget. Quis
              odio adipiscing eget turpis justo arcu.
            </p>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
