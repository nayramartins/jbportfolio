import React from 'react'
import { Link } from 'react-router-dom'

import './Thumbnail.sass'

function Thumbnail({ data }) {
  const thumbnailImage = data.node.body[0].primary
  const thumbnailLink = data.node._meta.uid

  return (
    <div className="thumbnail-content">
      <Link to={`/projetos/${thumbnailLink}`}>
        <img src={thumbnailImage.image.url} alt={thumbnailImage.image.alt} />
      </Link>
    </div>
  )
}

export default Thumbnail
