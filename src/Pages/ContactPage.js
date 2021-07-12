import { getByTitle } from "@testing-library/react";
import React from "react";
import "./Contactpage.css";

const ContactPage = () => {
  return(
    <section className="contact my-5">
      <div className="container">
        <div className="text-center mb-2">
          <h4>contact us</h4>
          <h2>get toush with us</h2>
        </div>
       <div className="row">
          <div className="col left-col">
            <div className="location"></div>
            <form className="form">
              <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" className="input"/>
              </div>
              <div className="form-control">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" className="input"/>
              </div>
              <div className="form-control">
                <label htmlFor="message">Your Message</label>
                <textarea className="input" id="message"></textarea>
              </div>
              <a href="/" className="btn btn-primary">send</a>
            </form>
          </div>
          <div className="col right-col">
            <ul>
              <h3>
                Opening hours
              </h3>
              <li><strong>mon.</strong> 17:00 – 21:00</li>
              <li><strong>tue.-wed.</strong> 16:30 – 21:00</li>
              <li><strong>sun.</strong> 11:00 – 21:00</li>
            </ul>
            <p><i>Kitchen times may vary</i></p>
            <h3>Need help getting home?</h3>
            <p>We will call a cab for you!</p>
          </div>
       </div>
      </div>
    </section>
  );
}

export default ContactPage;