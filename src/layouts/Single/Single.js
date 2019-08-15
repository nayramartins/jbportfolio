import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import singleContent from './Single.query'

import ProjectTitle from '../../components/ProjectTitle'
import Slices from '../../components/Slices'

function Single() {
  const { loading, data } = useQuery(singleContent)

  if (loading) return (
    <div></div>
  )

  return (
    <section>
      <ProjectTitle data={data.allPages.edges[0].node.body[0].primary} />
      {
        <Slices slices={data.allPages.edges[0].node.body} />
      }
    </section>
  )
}

export default Single
