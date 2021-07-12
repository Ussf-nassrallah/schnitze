import React from 'react'
import './Event.css'

const Event = ({ id, background, title, subtitle }) => {
  const backgroundImg = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  return (
    <article className="event" style={backgroundImg}>
      <div className="event-info">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </article>
  )
}

export default Event
