import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import homeContent from './Home.query'

import HeroBanner from '../../components/HeroBanner'
import RichText from '../../components/RichText'
import Thumbnail from '../../components/Thumbnail'

function Home(props) {
  const { loading, error, data } = useQuery(homeContent)
  console.log(loading, data)
  return (
    <section className="home-page">
      <HeroBanner />
      <RichText />
      <Thumbnail />
    </section>
  )
}

export default Home
