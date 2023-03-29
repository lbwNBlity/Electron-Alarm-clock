import React, {useCallback} from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {useNavigate} from 'react-router-dom';

interface HeaderPropsInterface{
    backPath: string,
}



const Header = (props: HeaderPropsInterface)=>{
    const {backPath} = props;
    const navigate = useNavigate();
    const handleBack = useCallback(()=>{
        navigate(backPath);
    }, [navigate, backPath]);
    return <div>
         <Button size='large' type="text" onClick={handleBack} shape="circle" icon={<ArrowLeftOutlined />}/>
    </div>
};

export default Header;