import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { withRouter } from 'react-router'

import singleProjectContent from './SingleProject.query'

import ProjectTitle from '../../components/ProjectTitle'
import TextBlock from '../../components/TextBlock'
import SingleImage from '../../components/SingleImage'

function SingleProject(props) {
  const { loading, data } = useQuery(singleProjectContent, {
    variables: {
      uid: props.match.params.project
    }
  })
  console.log(props)
  if (loading) return (
    <div></div>
  )

  return (
    <section>
      <ProjectTitle data={data.allProject_pages.edges[0].node.body[0].primary} />
      {
        data.allProject_pages.edges[0].node.body.map((value, index) => {
          console.log(value)
          switch(value.type) {
            case 'text':
              return <TextBlock data={value.primary} key={index} />

            case 'image':
              return <SingleImage data={value.primary} key={index} />
            default:
          }
          return ''
        })
      }
    </section>
  )
}

export default withRouter(SingleProject)
