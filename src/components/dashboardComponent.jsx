import React, {useState} from 'react';
import Cardcomponent from './cardComponent';
import "../styles/dashboard.scss";
import { Image_model } from '../models/image.class';
import { SIZE } from '../models/size.enum';

const Dashboardcomponent = () => {
    const defaultCard = new Image_model(2,"Grey beach",43,"Mary Robinette","2012-12-12T21: 08: 20Z", ["https://picsum.photos/id/100/600","https://picsum.photos/id/100/300"], 1, false);
    const defaultCard1 = new Image_model(3,"A castle",13,"Aliette de Bodard","2012-12-12T21: 08: 20Z", ["https://picsum.photos/id/101/600","https://picsum.photos/id/101/300"], 20, true);
    const [cards, setCards] = useState([defaultCard, defaultCard1]);
    return (



        <div className='dashboard'>
            {cards.map((card, index)=>{
                return (
                <Cardcomponent
                key={index}
                card={card}
                />
                )
            })}
        </div>
    );
}

export default Dashboardcomponent;
