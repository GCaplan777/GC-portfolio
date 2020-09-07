import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard/index";
import projects from "../projects.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class ProjectPage extends Component {
  state = { projects };

  render() {
    return (
      <>
        <h1>Projects</h1>
        <Container fluid="md">
          <Row>
            {this.state.projects.map((project) => (
              <ProjectCard
                image={project.image}
                name={project.name}
                deployedUrl={project.deployedUrl}
                githubUrl={project.githubUrl}
                summary={project.summary}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default ProjectPage;
