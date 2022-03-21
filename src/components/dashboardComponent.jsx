import React from 'react';
import '../styles/dashboard.scss';
import {AiFillLike, AiOutlineReload} from 'react-icons/ai'
const Dashboardcomponent = () => {
    return (
        <div className="dashboard">
        <div className="card">
        <div className="card__img">
                <img src='https://picsum.photos/id/100/600'  alt='foto1'/>
            </div>
            <div className="card__title">
                <h1>COOL HAT</h1>
                <h2><span>by </span>Stylefresh</h2>
            </div>
            <div className="card__media">
            <div className="card__buttom borde-izq">
                <div className='card__buttom--like'>
                    <AiFillLike/>
                </div>      
                <div className='card__buttom--text izq'>
                <h1>000</h1>
                </div>        

            </div>
            <div className="card__buttom ">
                <div className='card__buttom--repost'>
                    <AiOutlineReload/>
                </div>
                <div className='card__buttom--text derch'>
                <h1>000</h1>
                </div>   
            </div>
            </div>
        </div>


            
        </div>
    );
}

export default Dashboardcomponent;
