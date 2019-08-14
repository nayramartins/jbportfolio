import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import singleContent from './Single.query'

import ProjectTitle from '../../components/ProjectTitle'

function Single() {
  const { loading, data } = useQuery(singleContent)
  if (loading) return (
    <div></div>
  )
  return (
    <section>
      <ProjectTitle data={data.allPages.edges[0].node.body[0].primary} />
    </section>
  )
}

export default Single
