import React, { useState, useEffect, useRef } from "react";
import Cardcomponent from "../components/cardComponent";
import "../styles/dashboard.scss";
import "../styles/spinner.scss";
import { getAllImages, likedImage } from "../services/apiService";
import Headercomponent from "../components/headerComponent";
/* import { Image_model } from '../models/image.class'; */
const TOTAL_PAGES = 3;
const DashboardPage = () => {
  /* 
    const defaultCard = new Image_model(2,"Grey beach",43,"Mary Robinette","2012-12-12T21: 08: 20Z", ["https://picsum.photos/id/100/600","https://picsum.photos/id/100/300"], 1, false);
    const defaultCard1 = new Image_model(3,"A castle",13,"Aliette de Bodard","2012-12-12T21: 08: 20Z", ["https://picsum.photos/id/101/600","https://picsum.photos/id/101/300"], 20, true); 
*/

  // Tarjetas
  const [cards, setCards] = useState([]);
  // Loading
  const [loading, setLoading] = useState(true);
  // Páginas
  const [pageNum, setPageNum] = useState(1);
  // Scroll Infinito
  const [lastElement, setLastElement] = useState(null);
  // Búsqueda
  const [search, setSearch] = useState('');


  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((num) => num + 1);
      }
    })
  );

  useEffect(() => {
    if (pageNum <= TOTAL_PAGES) {
      getAllImages(pageNum, setCards, cards, setLoading);
    }
  }, [pageNum]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  var cardsConverted = Object.keys(cards).map(function(card) {
    return cards[card];
  });

   //Barra de Busqueda
   const cardsSearchFilter = cardsConverted.filter((card)=>{
    if(card.title.toLocaleLowerCase().includes(search.toLowerCase()) || card.author.toLocaleLowerCase().includes(search.toLowerCase())){
        return card;
    }
    });

    console.log(cardsSearchFilter)

  /* Función para cambiar el estado de like de cada tarjeta, así como su contador */
  function likedCard(card) {
    const index = cards.indexOf(card);
    const tempCard = [...cards];
    // Petición de like a la API
    likedImage(cards[index].id);
    tempCard[index].liked = !tempCard[index].liked;
    if (tempCard[index].liked === true) {
      tempCard[index].likes_count++;
    } else {
      tempCard[index].likes_count--;
    }
    setCards(tempCard);
  }

  
  return (
    <div>
    <Headercomponent
      search={search}
      setSearch={setSearch}
      />
      {!loading ? (
        <div className="dashboard">
          {cards.length > 0 &&
            cardsSearchFilter.map((card, index) => {
              return index === cards.length - 1 &&
                !loading &&
                pageNum <= TOTAL_PAGES ? (
                  <div
                  key={index}
                  ref={setLastElement}
                  >
                <Cardcomponent card={card} liked={likedCard} />
                </div>
              ) : (
                <Cardcomponent  key={index} card={card} liked={likedCard}/>
              );
            })}
        </div>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
};

export default DashboardPage;
