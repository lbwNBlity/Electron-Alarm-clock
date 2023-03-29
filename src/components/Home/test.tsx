import React, {useRef, ReactNode, useEffect} from 'react';
import ReactDOM from 'react-dom';

interface jk{
    children: ReactNode,
};

const Test: React.FC<jk>=({children})=>{
    const myref  = useRef<HTMLDivElement | null>(null);
    useEffect(()=>{
        console.log(myref);
    });
    return (<div ref={myref}>d</div>);
};

export default Test;