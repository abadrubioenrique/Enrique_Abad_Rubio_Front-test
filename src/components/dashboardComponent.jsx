import React from 'react';
import '../styles/dashboard.scss';
import {AiFillLike, AiOutlineReload} from 'react-icons/ai'
const Dashboardcomponent = () => {
    return (
        <div className="dashboard">
        <div className="card">
        <div className="card__img">
            {/* TODO  IMG desde DB*/}
                <img src='https://picsum.photos/id/100/600'  alt='foto1'/>
        <div className="card__price">
            <div className="card__price--triangle">
            {/* TODO  PRICE desde DB*/}
                <div className='price'><span>40.00<p>€</p></span></div>
            </div>
        </div>
        </div>
        
            <div className="card__title">
            {/* TODO TTILE desde DB */}
                <h1>COOL HAT</h1>
            {/* TODO AUTHOR desde DB */}
                <h2><span>by </span>Stylefresh</h2>
            </div>
            <div className="card__media">
            <div className="card__buttom borde-izq">
                <div className='card__buttom--like'>
                    <AiFillLike/>
                </div>      
                <div className='card__buttom--text--left'>
                <h1>000</h1>
                </div>        

            </div>
            <div className="card__buttom ">
                <div className='card__buttom--repost'>
                    <AiOutlineReload/>
                </div>
                <div className='card__buttom--text--right'>
                <h1>000</h1>
                </div>   
            </div>
            </div>
        </div>


            
        </div>
    );
}

export default Dashboardcomponent;
