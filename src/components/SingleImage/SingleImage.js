import React from 'react'

function SingleImage({ data }) {
  return (
    <img src={data.image.url} alt={data.image.alt} />
  )
}

export default SingleImage
