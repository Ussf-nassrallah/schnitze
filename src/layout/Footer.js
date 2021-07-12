import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <ul>
            <h2>Restaurant AT Cannes</h2>
            <li>New-York New-York</li>
            <li>1 allée de la liberté 06400 Cannes France</li>
            <li>Réservations : 33 (0)4 93 06 78 27</li>
          </ul>
          <ul>
            <h2>non-stop service</h2>
            <li>From Monday to Sunday <span>8:30 am - 23:00 am</span></li>
            <li>
              <p>
                To meet the demand of clients who have learned to trust the ensign, the service is, once again, irreproachable and the establishment offers a wide range of opening hours unique in Cannes: from 8:30 am to 2:00 am, 7 days a week.
              </p>
            </li>
          </ul>
          <ul className="info">
            <h2>Informations</h2>
            <li className="info-item">Acces map</li>
            <li className="info-item">Virtual visit</li>
            <li className="info-item">Legal notice</li>
            <li>
              <ul>
                <li><AiFillFacebook /></li>
                <li><AiFillInstagram /></li>
                <li><AiFillLinkedin /></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
