import React from 'react'

import TextBlock from '../../components/TextBlock'
import SingleImage from '../../components/SingleImage'

function Slices({ slices }) {
  return (
    slices.map((slice, index) => {
      switch(slice.type) {
        case 'text':
          return <TextBlock data={slice.primary} key={index} />

        case 'image':
          return <SingleImage data={slice.primary} key={index} />

        default:
      }

      return ''
    })
  )
}

export default Slices
