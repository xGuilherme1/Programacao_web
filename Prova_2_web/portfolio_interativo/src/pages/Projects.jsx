import React from "react";
import "../styles/projects.css";

// Página de projetos
function Projects() {
  return (
    <section className="projects">
      <h1>Meus Projetos</h1>
      <p>
        Aqui estão alguns dos meus projetos:{" "}
        <a href="https://github.com/xGuilherme1/Programacao_web.git" target="_blank" rel="noopener noreferrer">
        GitHub - Programação Web </a>
      </p>
    </section>
  );
}

export default Projects;