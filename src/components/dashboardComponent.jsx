import React, { useState, useEffect } from "react";
import Cardcomponent from "./cardComponent";
import "../styles/dashboard.scss";
import "../styles/spinner.scss";
import { getAllImages, likedImage } from "../services/apiService";
/* import { Image_model } from '../models/image.class'; */

const Dashboardcomponent = () => {
/* 
    const defaultCard = new Image_model(2,"Grey beach",43,"Mary Robinette","2012-12-12T21: 08: 20Z", ["https://picsum.photos/id/100/600","https://picsum.photos/id/100/300"], 1, false);
    const defaultCard1 = new Image_model(3,"A castle",13,"Aliette de Bodard","2012-12-12T21: 08: 20Z", ["https://picsum.photos/id/101/600","https://picsum.photos/id/101/300"], 20, true); 
*/
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllImages(setCards, setLoading);
  }, []);

  function likedCard(card){
    const index = cards.indexOf(card);
    const tempCard=[...cards];
    // Petición de like a la API
    likedImage(cards[index].id)
    tempCard[index].liked = !tempCard[index].liked;
    if(tempCard[index].liked ===true){
      tempCard[index].likes_count ++;
    }else{
      tempCard[index].likes_count--;
    }
    setCards(tempCard);

}
  return (
    <div>
      {!loading ? (
        <div className="dashboard">
          {cards.map((card, index) => {
            return <Cardcomponent key={index} card={card} liked={likedCard} />;
          })}
        </div>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
};

export default Dashboardcomponent;
