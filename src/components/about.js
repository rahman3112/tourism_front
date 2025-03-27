import React from 'react';
import styled from 'styled-components';

const AboutPage = styled.div`
  background-color: rgb(100, 176, 180);
  height: 800px;
  position: relative;
  top: -30px;
  padding-top: 30px;
  color: black;
`;

const Heading = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 1.2em;
  margin-bottom: 10px;

  &::before {
    content: '';
    display: inline-block;
    width: 1em;
    margin-right: 10px;
  }
`;

const About = () => {
  return (
    <AboutPage>
      <Heading>Welcome to TCM – Your Ultimate Travel Companion!</Heading>
      <Paragraph>
        Discover the best tourist spots effortlessly! Simply select a destination,
        and we'll guide you through must-visit attractions, hidden gems, and local wonders.
        With an interactive map and detailed descriptions, exploring new places has never been easier.
      </Paragraph>
      <List>
        <ListItem>🌍 Explore iconic landmarks, scenic spots, and cultural hotspots.</ListItem>
        <ListItem>📍 Navigate with ease using our integrated map.</ListItem>
        <ListItem>✨ Experience the beauty of every destination like never before!</ListItem>
      </List>
      <Paragraph>
        Start your journey today and make unforgettable memories with TCM! 🚀
      </Paragraph>
    </AboutPage>
  );
};

export default About;
