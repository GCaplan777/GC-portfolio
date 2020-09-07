import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

class About extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container>
            <h1>About Me</h1>
            <Image
              src="img/profile-pic.jpg"
              fluid
              alt="Gabriel Caplan"
              style={{ width: "18rem" }}
            />
            <p>
              I have joined &nbsp;
              <a href="https://bootcamp.cvn.columbia.edu/" target="_blank">
                Columbia Engineering Bootcamp
              </a>
              &nbsp; for Coding to jumpstart a career as a Web Developer. My
              work is informed by my years as a performing musician, as a
              teacher in NYC public schools, and my freelance work as
              fundraiser-medical education liaison for Columbia University
              Department of Surgery. Also, I love Zucker Brothers Movies!
            </p>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default About;
