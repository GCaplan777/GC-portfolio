import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class Contact extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container>
            <h1>Contact</h1>
            <>
              <Button
                href="mailto:gabriel.caplan@gmail.com"
                target="_blank"
                block
              >
                Reach me at: gabriel.caplan@gmail.com
              </Button>
              <Button
                href="https://github.com/GCaplan777"
                target="_blank"
                block
              >
                Github
              </Button>

              <Button
                href="https://www.linkedin.com/in/gabrielcaplan"
                target="_blank"
                block
              >
                Linkedin
              </Button>
              <Button
                href="hhttps://drive.google.com/file/d/117xzFBCRBuD-8zW1ekDs1mGWOeA_XRON/view?usp=sharing"
                target="_blank"
                block
              >
                Link to Resume
              </Button>
            </>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default Contact;
