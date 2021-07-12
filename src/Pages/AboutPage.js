import React from "react";
import './Aboutpage.css';

const AboutPage = () => {
  return(
    <>
      <section className="restaurant-a my-5">
        <div className="container">
          <div className="grid">
            <div className="restaurant-image">
              <img src="https://www.nynycannes.com/images/concept-ny-ny.png" alt="restaurant"/>
            </div>
            <article className="restaurant-info">
              <p>
                Opened in 2012, the brasserie New York New York transposes the spirit and atmosphere of a New York steak house to Cannes, to mix them with typically French ingredients: refinement and quality cuisine.
              </p>
              <p>
                Facing the Palais des Festivals, this place of ​​1000 m² including 450m² of restaurant space has been entirely renovated.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="restaurant-b">
        <div className="container">
          <div className="text-center">
            <article>
              <h2>
                So it’s a brasserie spirit
              </h2>
              <p>
                Nice wood tables, quality dishes, each detail is carefully thought out. As for the decor, a welcoming fireplace in the lounge area, as well as a bar and a space for the DJ, all in tones of glazed chestnut and cream. The walls are layed in brick, reminiscent of traditional New York homes. The terrace is covered with a completely retractable roof to enjoy the natural light with the first sunny days.
              </p>
              <p>
                The open kitchen allows the guests to appreciate the ballet of the brigade and the large wood-fired oven. The menu offers a large choice of top quality grilled meat.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;