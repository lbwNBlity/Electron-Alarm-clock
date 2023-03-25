import React from "react";
import {useNavigate} from 'react-router-dom';
import { Button } from 'antd';
import {  useDispatch } from 'react-redux'
import dayjs from 'dayjs';

import {setTimerValue} from '@/store/timer';

interface HomeProps{};

const Home : React.FC<HomeProps>= ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return <div>
        <Button onClick={()=>{
            dispatch(setTimerValue({timerValue: 2}));
            navigate('/2')
        }} type="primary">Primary Button</Button>
    </div>;
};

export default Home;