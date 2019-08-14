import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { TITLE_QUERY, PROJECTS_QUERY } from './Projects.query'

import ProjectTitle from '../../components/ProjectTitle'
import Thumbnail from '../../components/Thumbnail'

import './Projects.sass'

function Projects() {
  const { loading, error, data } = useQuery(TITLE_QUERY)
  const projects = useQuery(PROJECTS_QUERY)

  if (loading) return (
    <div></div>
  )
  return(
  <section>
    <ProjectTitle data={data.allProjects_pages.edges[0].node.body[0].primary} />
    <div className="projects-thumbnail container">
      {
        projects.data.allProject_pages.edges.map((item, index) => <Thumbnail key={index} data={item} />)
      }
    </div>
  </section>
  )
}

export default Projects
