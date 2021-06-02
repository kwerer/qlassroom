import React, { useState } from "react";
import {
  Item,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Button,
  Progress,
  Container,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function SideBarPusher() {
  let [PhysicsProgress, SetPhysicsProgress] = useState(50);
  let handleLevelChange = (event) => {
    event.preventDefault();
    SetPhysicsProgress(PhysicsProgress + 10);
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column className={styles.DashboardSegment} width={11}>
            <Divider hidden />
            <Header as="h2" color="blue" className={styles.SegmentHeader}>
              <Icon name="list" color="blue" />
              To-Do List
            </Header>
            <Segment padded>
              <Item>
                <Item.Content>
                  <Item.Header as="h3">
                    Graded Quiz due in 3 hours
                    <Link to="/PhysicsQuiz">
                      <Button
                        primary
                        floated="right"
                        size="huge"
                        icon
                        labelPosition="right"
                      >
                        Chemistry Quiz
                        <Icon name="external alternate" floated="right" />
                      </Button>
                    </Link>
                  </Item.Header>
                  <Item.Meta>Prepare for it</Item.Meta>
                  <Item.Extra></Item.Extra>
                </Item.Content>
              </Item>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column className={styles.DashboardSegment} width={11}>
            <Segment padded>
              <Item>
                <Item.Content>
                  <Item.Header as="h3">
                    Resume Tasks
                    <Link to="/PhysicsQuiz">
                      <Button
                        primary
                        floated="right"
                        size="huge"
                        icon
                        labelPosition="right"
                      >
                        Biology Practice
                        <Icon name="external alternate" floated="right" />
                      </Button>
                    </Link>
                  </Item.Header>
                  <Item.Meta>Continue where you left off</Item.Meta>
                  <Item.Extra></Item.Extra>
                </Item.Content>
              </Item>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column className={styles.DashboardSegment} width={11}>
            <Header as="h2" color="blue">
              <Icon name="pie chart" />
              Progress
            </Header>

            <Grid>
              <Grid.Column width={4}>
                <Segment padded>
                  <Item className={styles.ProgressSubjects}>
                    <Item.Image
                      size="mini"
                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                    />
                    <Link to="/PhysicsQuiz">
                      <span className={styles.ProgressSubjects}>Physics</span>
                    </Link>
                    <Divider hidden />
                    <Progress
                      percent={PhysicsProgress}
                      size="small"
                      color="olive"
                      autoSuccess
                    ></Progress>
                    <Button onClick={handleLevelChange}>Increment</Button>
                  </Item>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment padded>
                  <Item>
                    <Item.Image
                      size="mini"
                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                    />

                    <Link to="/PhysicsQuiz">
                      <span>Chemistry</span>
                    </Link>

                    <Divider hidden />
                    <Progress
                      percent={15}
                      size="small"
                      color="orange"
                    ></Progress>
                  </Item>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment padded>
                  <Item>
                    <Item.Image
                      size="mini"
                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                    />

                    <Link to="/PhysicsQuiz">
                      <span>Biology</span>
                    </Link>

                    <Divider hidden />
                    <Progress
                      percent={15}
                      size="small"
                      color="yellow"
                    ></Progress>
                  </Item>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment padded>
                  <Item>
                    <Item.Image
                      size="mini"
                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                    />

                    <Link to="/PhysicsQuiz">
                      <span>English</span>
                    </Link>

                    <Divider hidden />
                    <Progress
                      percent={15}
                      size="small"
                      color="brown"
                    ></Progress>
                  </Item>
                </Segment>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
