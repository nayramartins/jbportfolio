import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import menuContent from './Menu.query'

import Header from '../../components/Header'

function Menu() {
  const { loading, data } = useQuery(menuContent)
  if (loading) return (
    <div></div>
  )
  return (
    <header>
      <Header data={data.allMenus.edges[0].node.items} />
    </header>
  )
}

export default Menu
