import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.css';
import '../carousel.css';
import logo from '../logo.svg';



const Photos = (props) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          interval={3000}
          transitionTime={900}
        >
          {props.images.map(indivImage => <div>
            <img alt='' src={indivImage} />
          </div>)}
        </Carousel>
      </header>
    </div>
  );
};

export default Photos;