import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import singleContent from './Single.query'

import ProjectTitle from '../../components/ProjectTitle'
import TextBlock from '../../components/TextBlock'

function Single() {
  const { loading, error, data } = useQuery(singleContent)
  if (loading) return (
    <div></div>
  )
  console.log(data)
  return (
    <section>
      <ProjectTitle />
    </section>
  )
}

export default Single
