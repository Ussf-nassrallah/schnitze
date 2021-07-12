import React from "react";
import Upperbar from "./layout/Upperbar";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import MenuPage from "./Pages/MenuPage";
import EventsPage from "./Pages/EventsPage";
import ContactPage from "./Pages/ContactPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return(
    <Router>
      <div className="App">
        <Upperbar />
        <Navbar />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;