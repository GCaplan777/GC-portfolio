import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Pdf from "../assets/resume.pdf";

class Contact extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container>
            <h1>Contact</h1>
            <>
              <Button href="mailto:gabriel.caplan@gmail.com" target="_blank">
                gabriel.caplan@gmail.com
              </Button>
              <> </>
              <Button href="https://github.com/GCaplan777" target="_blank">
                Github
              </Button>
              <> </>
              <Button
                href="https://www.linkedin.com/in/gabrielcaplan"
                target="_blank"
              >
                Linkedin
              </Button>
              <> </>
              <Button
                href={Pdf}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                Resume
              </Button>
            </>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default Contact;
