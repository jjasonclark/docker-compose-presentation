// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  CodePane,
  Code,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import basicDockerCompose from "./basic_docker-compose.yml";
import mysqlDockerCompose from "./mysql_docker-compose.yml";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit bold lineHeight={1} textColor="secondary">
            Docker-Compose
          </Heading>
          <Heading size={1} fit bold lineHeight={1} textColor="secondary">
            For development runtime
          </Heading>

          <Text margin="20px 0 0" textColor="secondary" size={1} bold>
            An overview
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Agenda
          </Heading>
          <List>
            <ListItem>Goals</ListItem>
            <ListItem>Commands</ListItem>
            <ListItem>Docker-compose.yml</ListItem>
            <ListItem>Tips / Gotchas</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">
            Goal
          </Heading>
          <Text>
            Docker and Docker-compose are normally used for production
            deployment. Most documentation is focused on this fact. The goal of
            a developer environment is a bit different.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" fit caps>
            Common commands
          </Heading>
          <List>
            <ListItem bold>build</ListItem>
            <ListItem bold>up</ListItem>
            <ListItem bold>down</ListItem>
            <Code>docker-compose down -v</Code>
            <ListItem bold>logs</ListItem>
            <Code>docker-compose logs -f --tail=50 server</Code>
            <ListItem bold>run</ListItem>
            <Code>docker-compose run --rm server npm test</Code>
            <ListItem bold>exec</ListItem>
            <Code>docker-compose exec server ls -la /tmp/.cache/</Code>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary" margin="20px 0 0 0">
            Useful commands
          </Heading>
          <List>
            <ListItem>Shell access</ListItem>
            <Code>docker-compose run --rm server /bin/sh</Code>
            <ListItem>Docker-compose is to long</ListItem>
            <Code>alias fig=docker-compose</Code>
            <ListItem>Do not forget removing containers</ListItem>
            <Code>alias dcr='docker-compose run --rm'</Code>
            <ListItem>Testing with cli args</ListItem>
            <Code>alias dcrs='docker-compose run --rm --service-ports'</Code>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">
            Docker-compose.yml
          </Heading>
          <CodePane source={basicDockerCompose} lang="yaml" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">
            Sample DB service
          </Heading>
          <CodePane source={mysqlDockerCompose} lang="yaml" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">
            Gotchas
          </Heading>
          <List>
            <ListItem>Cannot ssh somewhere?</ListItem>
            <Code>- $HOME/.ssh/:/root/.ssh/</Code>
            <ListItem>
              using the host network mode only allows a single instance to run
              at a time
            </ListItem>
            <ListItem>
              Build not working right or temp files building up? Down then up
              the services
            </ListItem>
            <ListItem>docker node debugging</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">
            Questions?
          </Heading>
          <Text margin="20px 0 0">Available on Slack as @vn12345</Text>
        </Slide>
      </Deck>
    );
  }
}
