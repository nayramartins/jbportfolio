import React from 'react'
import { RichText } from 'prismic-reactjs'

import './TextBlock.sass'

function TextBlock({ data }) {
  return(
    <section className="text-block container">
      {RichText.render(data.text)}
    </section>
  )
}

export default TextBlock
