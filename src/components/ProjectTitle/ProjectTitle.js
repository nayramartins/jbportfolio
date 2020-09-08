import React from 'react'
import './ProjectTitle.sass'

function ProjectTitle({ data }) {
  console.log(data)
  return(
    <section className="container single">
      <div className="featured-image">
        {/* <img src={data.image.url} alt={data.image.alt} /> */}
        <h1 className="project-title">{data.title[0].text}</h1>
      </div>
      <div>
        <h2 className="project-about">{data.subtitle && data.subtitle[0].text}</h2>
      </div>
    </section>
  )
}

export default ProjectTitle
