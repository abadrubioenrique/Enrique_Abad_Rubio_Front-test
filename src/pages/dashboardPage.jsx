import React from 'react';
import Cardcomponent from '../components/cardComponent';
import Headercomponent from '../components/headerComponent';

import "../styles/dashboard.scss";

const Dashboardpage = () => {
    return (
        <div>
            <Headercomponent></Headercomponent>
            <div className='dashboard'>
                <Cardcomponent></Cardcomponent>
                <Cardcomponent></Cardcomponent>
            </div>
            

        </div>
    );
}

export default Dashboardpage;
