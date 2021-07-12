import React from "react";
import CafeImg from "../assets/cafe-img.jpg";
import RestaurantImg from "../assets/restaurant-img.jpg";
import Review from "../Components/Review";
import Img1 from "../assets/img-gallery/img-1.jpg";
import Img2 from "../assets/img-gallery/img-2.jpg";
import Img3 from "../assets/img-gallery/img-3.jpg";
import Img4 from "../assets/img-gallery/img-4.jpg";
import Img5 from "../assets/img-gallery/img-5.jpg";
import Img6 from "../assets/img-gallery/img-6.jpg";
import Img7 from "../assets/img-gallery/img-7.jpg";
import Img8 from "../assets/img-gallery/img-8.jpg";
import questions from '../data/questions';
import Questions from "../Components/Questions";
import Dropdown from "../Components/Dropdown";
import "./Homepage.css";

const HomePage = () => {
  return(
    <>
      <section id="showcase" className="showcase">
        <div className="container">
          <div className="showcase-inner">
            <h1>
              we deliver good quality food with great service to our customers
            </h1>
            <a href="/" className="btn btn-primary">
              Book now
            </a>
            <div class="icon-scroll">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <article className="article-1 grid col-md-4 my-5">
            <img src={CafeImg} alt="CafeImg"/>
            <div>
              <h4>CAFÉ</h4>
              <h2>
                A GRAND CAFÉ IN MIDTOWN
              </h2>
              <p>
                The National Bar & Dining Rooms, conveniently located on the East Side of The City, is acclaimed Chef Geoffrey Zakarian's vision of a grand café, offering modern bistro cuisine during breakfast, brunch, lunch and dinner in a comfortable atmosphere.
              </p>
              <a href="/" className="btn btn-secondary">
                Come on In
              </a>
            </div>
          </article>

          <article className="article-2 grid col-md-4 my-5">
            <div>
              <h4>Restaurant</h4>
              <h2>
                Chef Geoffrey Zakarian
              </h2>
              <p>
              A celebrated Chef, Restaurateur, TV Personality and Author, Geoffrey Zakarian has helmed internationally acclaimed kitchens across the country. In a career spanning over 30 years, Geoffrey has created a signature style and taste that is center stage at The National.
              </p>
              <a href="/" className="btn btn-secondary">
                Learn more
              </a>
            </div>
            <img src={RestaurantImg} alt="RestaurantImg"/>
          </article>
        </div>
      </section>

      <section className="reviews py-5 mt-5">
        <div className="container">
          <Review />
        </div>
      </section>

      <section className="img-gallery mb-5">
        <img src={Img1} alt="Img1"/>
        <img src={Img2} alt="Img2"/>
        <img src={Img3} alt="Img3"/>
        <img src={Img4} alt="Img4"/>
        <img src={Img5} alt="Img5"/>
        <img src={Img6} alt="Img6"/>
        <img src={Img7} alt="Img7"/>
        <img src={Img8} alt="Img8"/>
      </section>

      <section className="questions mb-5">
        <div className="container">
          <div className="text-center">
            <h4>q&a</h4>
            <h2>You have a questions</h2>
          </div>
          <div className="grid">
            {
              questions.map(question => {
                return <Questions key={question.id} {...question} />
              })
            }
          </div>
        </div>
      </section>

      <section className="reservation mb-5">
        <div className="container">
          <div className="text-center">
            <h4>reservation</h4>
            <h2>book a table</h2>
          </div>
          <div className="grid">
            <Dropdown />
            <input type="text" className="r-input" placeholder="day/month/2021" />
            <input type="text" className="r-input" placeholder="11:00" />
            <ul className="flex">
              <li>
                <a href="/" className="btn btn-primary">Reservy</a>
              </li>
              <li>
                Contact us
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;