import React from "react";
import { useSelector } from 'react-redux'

import store from '@/store/index';

const Home = ()=>{
    const timerValue = useSelector(state => state.timer.timerValue);
   
    return <div>{timerValue}</div>;
};

export default Home;