import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import "./style.css";

function ProjectCard(props) {
  return (
    <Col md="auto">
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
          <Button
            href={props.deployedUrl}
            variant="primary"
            target="_blank"
            block
          >
            Link to Deployed Site
          </Button>
          <Button
            href={props.githubUrl}
            variant="primary"
            target="_blank"
            block
          >
            Link to Github Repo
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;
