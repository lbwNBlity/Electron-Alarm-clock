import React, {useCallback} from "react";
import { useAppSelector } from '@/store/index'
import {Statistic, Button } from 'antd';
import {useNavigate} from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';


const { Countdown } = Statistic;


const Home = ()=>{
    const timerValue: number = useAppSelector(state => state.timer.timerValue);
    const navigate = useNavigate();
    const handleBack = useCallback(()=>{
        navigate('/');
    }, [navigate]);
    const handleFinish=useCallback(()=>{
        const{ipcRenderer}= (window as any).myApi;
        ipcRenderer.send('showDialog', '456');
    }, []);

    return <div>
        <Button type="text" onClick={handleBack} shape="circle" icon={<ArrowLeftOutlined />}/>
        <Countdown onFinish={handleFinish} title="Countdown" value={timerValue} format="HH:mm:ss" />
        </div>;
};

export default Home;