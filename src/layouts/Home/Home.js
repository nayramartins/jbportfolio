import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import homeContent from './Home.query'

import HeroBanner from '../../components/HeroBanner'
import TextBlock from '../../components/TextBlock'

function Home(props) {
  const { loading, data } = useQuery(homeContent)
  if (loading) return (
    <div></div>
  )
  return (
    <section className="home-page">
      <HeroBanner data={data.allHome_pages.edges[0].node.body[0].primary} />
      <TextBlock data={data.allHome_pages.edges[0].node.body[1].primary} />
    </section>
  )
}

export default Home
