import React from 'react'
import { RichText } from 'prismic-reactjs'

import './HeroBanner.sass'

function HeroBanner({ data }) {
  return (
    <section className="hero-banner container">
      <div className="hero-banner__image">
        <img src={data.banner_image.url} alt={data.banner_image.alt} />
      </div>
      <div className="hero-banner__text">
        <div className="hero-banner__text--title">
          {RichText.render(data.banner_title)}
        </div>
        <div className="hero-banner__text--content">
          {RichText.render(data.banner_text)}
        </div>
       </div>
    </section>
  )
}

export default HeroBanner
