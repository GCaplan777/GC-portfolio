import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard/index";
import projects from "../projects.json";

class ProjectPage extends Component {
  state = { projects };

  render() {
    return (
      <>
        <h1>Projects</h1>

        {this.state.projects.map((project) => (
          <ProjectCard
            image={project.image}
            name={project.name}
            deloyedUrl={project.deloyedUrl}
            githubUrl={project.githubUrl}
            summary={project.summary}
          />
        ))}
      </>
    );
  }
}

export default ProjectPage;
