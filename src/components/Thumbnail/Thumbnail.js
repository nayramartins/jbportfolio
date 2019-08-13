import React from 'react'
import './Thumbnail.sass'

function Thumbnail() {
  return (
    <div className="thumbnail">
      <div className="container">
        <div className="thumbnail-content">
          <a href="http://julianabezerra.com.br/farol-santander/">
            <img src="http://julianabezerra.com.br/wp-content/uploads/2018/04/IMG_4914.jpg" />
          </a>
        </div>
        <div className="thumbnail-content">
          <a href="http://julianabezerra.com.br/farol-santander/">
            <img src="http://julianabezerra.com.br/wp-content/uploads/2017/05/Captura-de-Tela-2017-05-20-às-17.28.29.png" />
          </a>
        </div>
        <div className="thumbnail-content">
          <a href="http://julianabezerra.com.br/farol-santander/">
            <img src="http://julianabezerra.com.br/wp-content/uploads/2017/05/Captura-de-Tela-2017-05-20-às-17.28.29.png" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail
