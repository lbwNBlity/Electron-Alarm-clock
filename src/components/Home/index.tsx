import React, { useCallback, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { CaretRightOutlined } from '@ant-design/icons';

import styles from './index.less';
import { setState } from '@/store/timer';

dayjs.extend(customParseFormat);

const Home: React.FC = () => {
    const [timerValue, setTimerValue] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onChange = useCallback((time: Dayjs | null) => {
        setTimerValue(time?.valueOf() || 0);
    }, []);
    const handleStartCounter =useCallback(()=>{
        dispatch(setState({ timerValue }));
        navigate('/2')
    }, [timerValue, dispatch, navigate]);
    return <div className={styles.container}>
        <div>
        <TimePicker onChange={onChange} showNow={false} defaultValue={dayjs()} />
        <Button
            onClick={handleStartCounter}
            type="primary"
            icon={<CaretRightOutlined/>}
            shape='circle'
            className={styles['home-start-button']}
            disabled={timerValue<dayjs().valueOf()}
        />
        </div>
    </div>;
};

export default Home;