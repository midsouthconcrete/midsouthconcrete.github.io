import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Navigation from './containers/Navbar';
import Home from './containers/Home';
import Photos from './containers/Photos';
import Contact from './containers/Contact';

const images = [
  require('./images/Work3.JPG'),
  require('./images/Work1.JPG'),
  require('./images/Work2.JPG'),
  require('./images/Work4.JPG'),
  require('./images/Work5.JPG'),
  require('./images/Work6.JPG'),
  require('./images/Work7.JPG'),
  require('./images/Work8.JPG'),
  require('./images/Work9.JPG'),
  require('./images/Work10.JPG'),
  require('./images/Work11.JPG'),
  require('./images/Work12.JPG'),
  require('./images/Work13.JPG'),
  require('./images/Work14.JPG'),
  require('./images/Work15.JPG'),
  require('./images/Work16.JPG'),
  require('./images/Work17.JPG'),
  require('./images/Work18.JPG'),
  require('./images/Work19.JPG'),
  require('./images/Work20.JPG'),
  require('./images/Work21.JPG'),
  require('./images/Work22.JPG'),
  require('./images/Work23.JPG'),
  require('./images/Work24.JPG'),
  require('./images/Work25.JPG')
];

const homeImg = require('./images/ConcretePouring.JPG');

function App() {
  return (
    <Router>
      <Navigation />
      < Switch >
        <Route path="/photos">
          <Photos images={images} />
        </Route>
        <Route path="/contact-us">
          <Contact homeImg={homeImg} />
        </Route>
        <Route path="/">
          <Home homeImg={homeImg} />
        </Route>
      </Switch >
    </Router >
  );
}

export default App;
