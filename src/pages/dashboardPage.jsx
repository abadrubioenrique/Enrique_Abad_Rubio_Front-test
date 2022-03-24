import React, { useState, useEffect, useRef } from "react";
/* Componentes */
import Cardcomponent from "../components/cardComponent";
import Headercomponent from "../components/headerComponent";
/* Servicios */
import { getAllImages, likeImage } from "../services/apiService";
/* Estilos */
import "../styles/dashboard.scss";
import "../styles/spinner.scss";

const TOTAL_PAGES = 3;
const DashboardPage = () => {
  /* Tarjetas */
  const [cards, setCards] = useState([]);
  /* Loading */
  const [loading, setLoading] = useState(true);
  /* Páginas */
  const [pageNum, setPageNum] = useState(1);
  /* Scroll Infinito */
  const [lastElement, setLastElement] = useState(null);
  /* Búsqueda */
  const [search, setSearch] = useState("");
  /* Errores */
  const [error, setError] = useState("");

  /* Obtención de los datos */
  useEffect(() => {
    if (pageNum <= TOTAL_PAGES) {
      // Petición
      getAllImages(pageNum, setCards, cards, setLoading, setError);
    }
  }, [pageNum]);
  
  /* Scroll Infinito */
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((num) => num + 1);
      }
    })
  );

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



  /* Barra de Busqueda */
  var cardsConverted = Object.keys(cards).map(function (card) {
    return cards[card];
  });

  const cardsSearchFilter = cardsConverted.filter((card) => {
    if (
      card.title.toLocaleLowerCase().includes(search.toLowerCase()) ||
      card.author.toLocaleLowerCase().includes(search.toLowerCase())
    ) {
      return card;
    }
  });

  /* Función para cambiar el estado de like de cada tarjeta, así como su contador */
  function likedCard(card) {
    const index = cards.indexOf(card);
    const tempCard = [...cards];
    // Petición de like a la API
    likeImage(cards[index].id);
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
      <Headercomponent search={search} setSearch={setSearch} />
      {error !== "" ? (
        <h1 className="error">{error}</h1>
      ) : !loading ? (
        <div className="dashboard">
          {cards.length > 0 &&
            cardsSearchFilter.map((card, index) => {
              return index === cards.length - 1 &&
                !loading &&
                pageNum <= TOTAL_PAGES ? (
                <div key={index} ref={setLastElement}>
                  <Cardcomponent card={card} liked={likedCard} />
                </div>
              ) : (
                <Cardcomponent key={index} card={card} liked={likedCard} />
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
