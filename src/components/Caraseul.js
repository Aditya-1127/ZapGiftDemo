import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import '../App.css';
export default function Caraseul() {
  
  
    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >

        <Slider className="sliderslide">
          <Slide index={0}><img src="https://images.unsplash.com/photo-1536940385103-c729049165e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80"/></Slide>
        
          <Slide index={1}><img src="https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/></Slide>
          <Slide index={2}><img src="https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/></Slide>
         
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
  