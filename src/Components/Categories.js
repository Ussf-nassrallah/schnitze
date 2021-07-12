import React from 'react'

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container grid">
      {
        categories.map((category, index) => {
          return (
            <button className="btn filter-btn" key={index} onClick={() => filterItems(category)}>
              {category}
            </button>
          );
        })
      }
    </div>
  )
}

export default Categories
