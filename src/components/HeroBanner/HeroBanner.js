import React from 'react'
import './HeroBanner.sass'

function HeroBanner() {
  return (
    <section className="hero-banner container">
      <div className="hero-banner__image">
        <img src="http://julianabezerra.com.br/wp-content/uploads/2017/04/banner_home.jpg" />
      </div>
      <div className="hero-banner__text">
        <h2 className="title"> Estratégias <span>verbais</span> </h2>
        <p>Com a palavra, a sua marca. A forma como uma marca se apresenta e fala com o seu público pode dizer muito sobre ela. Tom de voz, tempos verbais e até mesmo o uso de expressões são escolhas que devem ser pensadas estrategicamente.  </p>
      </div>
    </section>
  )
}

export default HeroBanner
