import React from 'react'
import './ProjectTitle.sass'

function ProjectTitle() {
  return(
    <section className="container single">
      <div className="featured-image">
        <img src="http://julianabezerra.com.br/wp-content/uploads/2018/04/topo_farolsantander.jpg" alt="" />
        <h1 className="project-title">Farol Santander</h1>
      </div>
      <div>
        <h2 className="project-about">Sobre o <span>Projeto</span></h2>
      </div>
    </section>
  )
}

export default ProjectTitle
