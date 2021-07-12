import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './Question.css'

const Questions = (questions) => {
  const [showInfo, setShowInfo] = useState(false);
  const {id, title, info} = questions;

  return (
    <article className="question">
      <div className="header">
        <h3>{title}</h3>
        <button className="icon-btn" onClick = {
          () => setShowInfo(!showInfo)
        }>
          {
            showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </div>
      {
        showInfo && <p className="info">{info}</p>
      }
    </article>
  )
}

export default Questions
