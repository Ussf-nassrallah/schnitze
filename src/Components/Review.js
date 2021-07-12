import React, { useState } from 'react'
import people from '../data/reviews';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import "./Review.css"

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, image, text, name } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }

  const bckImg = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }

  return (
    <article className="review text-center">
      <div className="review-img" style={bckImg}></div>
      <p>
        {text}
      </p>
      <h3>
        <span className="line"></span> {name}
      </h3>
      <div className="arrows">
        <div className="arrow-left arrow" onClick={prevPerson}>
          <MdKeyboardArrowLeft />
        </div>
        <div className="arrow-right arrow" onClick={nextPerson}>
          <MdKeyboardArrowRight />
        </div>     
      </div>
    </article>
  )
}

export default Review
