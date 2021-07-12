import React from "react";
import Logo from "../logo.svg";
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import "./Upperbar.css";

const Upperbar = () => {
  return(
    <section className="upperbar">
      <div className="container">
        <div className="upperbar-items">
          <img src={Logo} alt="Schnitze"/>

          <div className="contact-info">
            <div className="phone flex">
              <div className="icon phone-icon flex"><ImPhone /></div>
              <p>+212 4114 1524</p>
            </div>
            
            <div className="email flex">
              <div className="icon phone-icon flex"><MdEmail /></div>
              <p>schnitze@rest.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Upperbar;