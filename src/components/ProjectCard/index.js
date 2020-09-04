import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function ProjectCard(props) {
  return (
    <Container fluid="md">
      <Row>
        <Col md4={4}>
          <div className="card">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="img"
                variant="top"
                alt={props.name}
                src={props.image}
              />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.summary}</Card.Text>
                <a href={props.deployedUrl} target="_blank">
                  <Button variant="primary">Link to Deployed Site</Button>
                </a>
                <a href={props.githubUrl} target="_blank">
                  <Button variant="primary">Link to Github Repo</Button>
                </a>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectCard;
