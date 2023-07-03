import React from "react";
import "./Card.css";

import card from "../../../assets/card.svg";
import spade from "../../../assets/spade.svg";
function Card() {
  return (
    // <div className='card__container'>
    //   <img style={{}} src={spade} className='card__spade' />
    //   <div>Flop Factory</div>
    //   <img src={spade} className='card__spade' />
    // </div>
    <img src={card} className='card__card' />
  );
}

export default Card;
