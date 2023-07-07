import React from "react";
import Header from "../components/Header";

import "./Plans.css";
function Plans() {
  return (
    <div className='home__container'>
      <div className='home__main'>
        <Header />
        <div className='plans__content'>
          <div className='plans__free__card'>
            <div className='plans__title'>FREE</div>
            <div className='plans__price'>$0.00 / m</div>
            <div className='plans__features'>
              <ul className='plans__free__list'>
                <li className='plans__free__item'>10 Daily Puzzles</li>
                <li className='plans__free__item'>2 Daily Quizzes</li>
                <li className='plans__free__item'>Free Video Lessons</li>
              </ul>
            </div>
            <div className='plans__button btn'>Try Now</div>
          </div>
          <div className='plans__ultimate__card'>
            <div className='plans__ultimate__title'>ULTIMATE</div>
            <div className='plans__price'>$0.99 / m</div>
            <div className='plans__features'>
              <ul className='plans__free__list'>
                <li className='plans__free__item'>
                  <strong>AD FREE</strong>
                </li>
                <li className='plans__free__item'>Ulimited Quizzes</li>
                <li className='plans__free__item'>Hand Reviews</li>
                <li className='plans__free__item'>Paid Tournaments</li>
                <li className='plans__free__item'>Beta Updates</li>
              </ul>
            </div>
            <div className='plans__button btn'>Try Now</div>
          </div>
        </div>
      </div>
      <div className='home__background'></div>
    </div>
  );
}

export default Plans;
