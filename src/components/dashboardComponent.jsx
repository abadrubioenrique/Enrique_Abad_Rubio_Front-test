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
        
            <div className="card__info">
            {/* TODO TTILE desde DB */}
                <h1 className='card__title'>COOL HAT</h1>
            {/* TODO AUTHOR desde DB */}
                <h2 className='card__author'><span className='card__by'>by </span>Stylefresh</h2>
            </div>
            <div className="card__media">
            <div className="button border-right">
                <div className='button__like'>
                    <AiFillLike/>
                </div>      
                <div className='button__text--left'>
                <h1 className='button__number'>000</h1>
                </div>        

            </div>
            <div className="button">
                <div className='button__repost'>
                    <AiOutlineReload/>
                </div>
                <div className='button__text--right'>
                <h1 className='button__number'>000</h1>
                </div>   
            </div>
            </div>
        </div>


            
        </div>
    );
}

export default Dashboardcomponent;
