import React from 'react'
import "./Menu.css"

const Menu = ({img, title, price, desc, category}) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="menu-item__img"/>
      <div className="menu-info">
        {/* <p className="menu-item__category">
          {category}
        </p> */}
        <div className="flex">
          <h3 className="menu-item__title">
            {title}
          </h3>
          <h4 className="menu-item__price">
            {price + '$'}
          </h4>
        </div>
        <p className="menu-item__desc">
          {desc}
        </p>
      </div>
    </article>
  )
}

export default Menu
