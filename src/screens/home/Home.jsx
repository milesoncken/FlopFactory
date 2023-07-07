import React from "react";
import "./Home.css";

import { gsap } from "gsap";
import Header from "../components/Header";

function Home() {
  return (
    <div className='home__container'>
      <div className='home__main'>
        <Header />
        <div className='home__content'>
          <div className='home__title'>
            Flop
            <br />
            Factory
          </div>
          <div className='home__extra'>
            The best way to elevate your poker game
          </div>
          <div className='home__button btn'>Launch</div>
        </div>
      </div>
      <div className='home__background'></div>
    </div>
  );
}

export default Home;
