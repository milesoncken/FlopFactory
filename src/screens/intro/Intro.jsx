import React from "react";
import "./Intro.css";
import spade from "../../assets/spade.svg";
import Card from "./components/Card";

import { gsap } from "gsap";

function Intro() {
  var tl = gsap.timeline();

  window.onload = () => {
    tl.to(".card__card", {
      transformOrigin: "center center",

      opacity: 1,
      scale: 0.125,
      x: "-130vw",
      y: "-190vh",
      duration: 1.4,
      ease: "power4.inOut",
    })
      .to(".card__card", {
        opacity: 0,
        duration: 0.2,
      })
      .to(
        ".intro__box",
        {
          opacity: 1,
          duration: 0.2,
        },
        "<"
      )
      .to(
        ".intro__box",
        {
          opacity: 0,
          duration: 0.8,
          width: "120vw",
          overflow: "hidden",
          left: "-10vw",
          height: "155vh",
          top: "-25vh",
          borderWidth: "4px",
        },
        "<"
      );
  };

  return (
    <div className='intro__container'>
      <div className='intro__card'>
        {/* <Card /> */}
        <svg
          className='card__card'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1600 2424'>
          <g>
            <path
              id='border'
              className='border'
              d='M
              1500,20a80.1,80.1,0,0,1,80,80V2324a80.1,80.1,0,0,1-80,80H100a80.1,80.1,0,0,1-80-80V100a80.1,80.1,0,0,1,80-80H1500m0-20H100A100,100,0,0,0,0,100V2324a100,100,0,0,0,100,100H1500a100,100,0,0,0,100-100V100A100,100,0,0,0,1500,0Z'
            />
            <rect
              className='rect'
              x='10'
              y='10'
              width='1580'
              height='2404'
              rx='90'
            />
          </g>
          <path
            id='f425aae1-24b3-4f55-9f24-2dedfe4e23e6'
            data-name='path2076'
            className='spade'
            d='M129,189.5c-114.6,117.1-2.2,202,88.4,146.2-17.1,60.9-26.5,65.7-36.9,81.8h97.8c-12.6-16.2-25.7-20.9-39.1-81.5,92.5,53.1,190-39.5,87.4-146.5-67.2-58.7-93.2-112.3-98.8-119.9C222.5,75.9,191,131.9,129,189.5Z'
          />
          <path
            id='ea37f5a7-d25d-412f-9ad2-6b2b665fbf93'
            data-name='path2076'
            className='spade'
            d='M1471.4,2224.5c114.6-117.1,2.2-202-88.4-146.2,17.1-60.9,26.5-65.7,36.9-81.8h-97.8c12.6,16.2,25.8,20.9,39.1,81.5-92.5-53.1-190,39.5-87.3,146.5,67.1,58.7,93.1,112.3,98.7,119.9C1378,2338.1,1409.4,2282.1,1471.4,2224.5Z'
          />
        </svg>
        <div className='intro__box'></div>
      </div>
    </div>
  );
}

export default Intro;
