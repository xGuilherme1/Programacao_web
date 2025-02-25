import React from "react";
import "../styles/home.css";

// Página inicial do portfólio
function Home() {
  return (
    <section className="home">
      <h1>Bem-vindo ao Meu Portfólio</h1>
      <p>Desenvolvedor Web apaixonado por criar experiências incríveis.</p>
      
      <section className="about">
        <h2>Sobre Mim</h2>
        <p>Sou um desenvolvedor web com conhecimento em algumas tecnologias, sempre buscando aprender mais.</p>
      </section>

      <section className="skills">
        <h2>Principais Habilidades</h2>
        <ul>
          <li>JavaScript, React, Node.js</li>
          <li>HTML, CSS, C#, R</li>
          <li>Banco de Dados: MySQL</li>
          <li>Versionamento: Git, GitHub</li>
        </ul>
      </section>

      <section className="education">
        <h2>Formação Acadêmica e Certificações</h2>
        <p>Graduando em Analise e Desenvolvimento de Sistemas - IFRO</p>
        <p>Certificações: Nenhuma</p>
      </section>
    </section>
  );
}

export default Home;