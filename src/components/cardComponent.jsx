import React from "react";
import "../styles/dashboard.scss";
import { AiFillLike, AiOutlineReload } from "react-icons/ai";

const Cardcomponent = ({card, liked}) => {
  const num = card.likes_count;
  let num_convert=0;
  if(num!==undefined){

    let n = num.toString().length;
    if(n===1){
      num_convert="00"+num;
    }else
    if(n>1 && n<3){
      num_convert = "0" + num;
    }else if (n >=3){
      num_convert = num;
    }
  }

    /* Función que se encarga de gestionar si liked es true o false y añadirle el color */
    function likedIcon(){
      if(card.liked){
          return (
            <div className="button__like button__like--liked" onClick={()=>liked(card)}>
              <AiFillLike />
            </div>
          );
      }else{
          return (
            <div className="button__like" onClick={()=>liked(card)}>
              <AiFillLike />
            </div>
          );
      }
  }


  return (
      <div className="card">
        <div className="card__img">
          <img src={card.main_attachment.big} alt="foto1" />
          <div className="card__price">
            <div className="card__price--triangle">
              <div className="price">
                <span className="price__number">
                {card.price}.00<p className="price__icon">€</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card__info">
          <h1 className="card__title">{card.title}</h1>
          <h2 className="card__author">
            <span className="card__by">by </span>{card.author}
          </h2>
        </div>
        <div className="card__media">
          <div className="button border-right">
            {likedIcon()}
            <div className="button__text--left">
              <h1 className="button__number">{num_convert}</h1>
            </div>
          </div>
          <div className="button">
            <div className="button__repost">
              <AiOutlineReload />
            </div>
            <div className="button__text--right">
              <h1 className="button__number">000</h1>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Cardcomponent;
