import React from "react";
import "../styles/dashboard.scss";
import { AiFillLike, AiOutlineReload } from "react-icons/ai";

import { Image_model } from '../models/image.class';
import { SIZE } from "../models/size.enum";
const Cardcomponent = () => {
  const defaultCard = new Image_model(2,"Grey beach",43,"Mary Robinette","2012-12-12T21: 08: 20Z", SIZE.SMALL, 1, false);
  const num = defaultCard.likesCount;
  let num_convert=0;

    let n = num.toString().length;
    console.log(n)
    if(n===1){
      num_convert="00"+num;
    }else
    if(n>1 && n<3){
      num_convert = "0" + num;
    }else if (n >=3){
      num_convert = num;
    }

    /* Función que se encarga de gestionar si liked es true o false y añadirle el color */
    function likedIcon(){
      if(defaultCard.liked){
          return (
            <div className="button__like button__like--liked">
              <AiFillLike />
            </div>
          );
      }else{
          return (
            <div className="button__like">
              <AiFillLike />
            </div>
          );
      }
  }


  return (
      <div className="card">
        <div className="card__img">
          {/* TODO  IMG desde DB*/}
          <img src="https://picsum.photos/id/100/600" alt="foto1" />
          <div className="card__price">
            <div className="card__price--triangle">
              {/* TODO  PRICE desde DB*/}
              <div className="price">
                <span className="price__number">
                {defaultCard.price}.00<p className="price__icon">€</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card__info">
          {/* TODO TTILE desde DB */}
          <h1 className="card__title">{defaultCard.title}</h1>
          {/* TODO AUTHOR desde DB */}
          <h2 className="card__author">
            <span className="card__by">by </span>{defaultCard.author}
          </h2>
        </div>
        <div className="card__media">
          <div className="button border-right">
            {/* <div className="button__like">
              <AiFillLike />
            </div> */}
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
