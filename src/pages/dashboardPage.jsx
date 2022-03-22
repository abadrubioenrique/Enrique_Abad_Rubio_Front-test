import React from 'react';
import Dashboardcomponent from '../components/dashboardComponent';
import Headercomponent from '../components/headerComponent';

import "../styles/dashboard.scss";

const Dashboardpage = () => {
    return (
        <div>
            <Headercomponent></Headercomponent>
            <Dashboardcomponent></Dashboardcomponent>
            

        </div>
    );
}

export default Dashboardpage;
