import React from 'react'
import './Thumbnail.sass'

function Thumbnail({ data }) {
  console.log(data)
  const thumbnailImage = data.node.body[0].primary
  const thumbnailLink = data.node._meta.uid

  return (
    <div className="thumbnail-content">
      <a href={thumbnailLink}>
        <img src={thumbnailImage.image.url} alt={thumbnailImage.image.alt} />
      </a>
    </div>
  )
}

export default Thumbnail
