import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import '../HeroSection2.scss';
import Slide from './Slide';
import './Cards.css';



function HeroSection(){
    const slides = [
        {
          title: "Christmas Night",
          subtitle: "Delhi",
          description: "Jingle Bells",
          image:
            "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
          title: "Diwali Night",
          subtitle: "Delhi",
          description: "Let your dreams come true",
          image:
            "https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
          title: "25th Anniversary",
          subtitle: "Mumbai",
          description: "Aditya Sharma",
          image:
            "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
          title: "22nd Birthday",
          subtitle: "Chennai",
          description: "Lalit Chaudhary",
          image:
            "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
          title: "Baby Shower",
          subtitle: "Paris",
          description: "Kiddo",
          image:
            "https://images.unsplash.com/photo-1536940385103-c729049165e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80"
        }
      ];
      
     
      
      const initialState = {
        slideIndex: 0
      };
      
      const slidesReducer = (state, event) => {
        if (event.type === "NEXT") {
          return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
          };
        }
        if (event.type === "PREV") {
          return {
            ...state,
            slideIndex:
              state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
          };
        }
      };
      
    
  
        let [state, dispatch] = React.useReducer(slidesReducer, initialState);

        return (
            
          <div>
          <div className="slides">
           
      
            {[...slides, ...slides, ...slides].map((slide, i) => {
              let offset = slides.length + (state.slideIndex - i);
              return <Slide slide={slide} offset={offset} key={i} />;
            })}
           
          </div>
          <div className="cbuttons">
          <button onClick={() => dispatch({ type: "PREV" })}>PREV</button>
          <button onClick={() => dispatch({ type: "NEXT" })}>NEXT</button>
          </div>
          </div>
    )
}

export default HeroSection;