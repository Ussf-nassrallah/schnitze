import React, { useState } from "react";
import data from '../data/events';
import Event from '../Components/Event';
import './Eventspage.css';

const EventsPage = () => {
  const [events, setEvents] = useState(data);

  return(
    <section className="events my-5">
      <div className="container">
        <div className="text-center mb-2">
          <h2>events</h2>
        </div>
        <div className="grid">
          {
            events.map(event => <Event
              key={event.id}
              background={event.background}
              title={event.title}
              subtitle={event.subtitle}
            />)
          }
        </div>
        <article>
          <p>
            Keen to make your event a success, The event department is constitued by a team of true professionals at your service. You can organise dinner, lunch, cocktail, party etc… with a full or partial privatization.
          </p>
          <p>
            Our manager in charge of all personnel will accompany you to meet your expectations. Our hostesses will be at your disposal to welcome you and your guests as it should.
          </p>
          <p>
            The New-York New-York has the advantage to offer a turnkey or a tailormade event, everything is already included in our rates.
          </p>
          <h3>
            Contact event :
          </h3>
          <p>
            1 Allées de la Liberté<br />
            06400 Cannes, USA<br />
            Phone : <strong>+33 (0)4 22 46 07 00</strong><br />
            Email : <strong>events@nynycannes.com</strong><br />
          </p>
        </article>
      </div>
    </section>
  );
}

export default EventsPage;