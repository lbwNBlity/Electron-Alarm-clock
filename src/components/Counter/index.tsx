import React, {useCallback} from "react";
import { useAppSelector } from '@/store/index'
import {Statistic } from 'antd';

import Header from '../Common/Header';
import styles from './index.less';



const { Countdown } = Statistic;


const Home = ()=>{
    const timerValue: number = useAppSelector(state => state.timer.timerValue);
    const handleFinish=useCallback(()=>{
        const{ipcRenderer}= (window as any).myApi;
        ipcRenderer.send('showDialog', '456');
    }, []);
    return <div className={styles.container}>
        <Header backPath="/"/>
        <div className={styles.content}>
        <Countdown onFinish={handleFinish} title="Countdown" value={timerValue} format="HH:mm:ss" />
        </div>
        </div>;
};

export default Home;