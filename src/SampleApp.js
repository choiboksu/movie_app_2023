import React from 'react';
import { useState } from "react";

function SampleApp() {
    const [time, setTime] = useState(1);

    function timeHandler(){
        time = setTime(time+ 1);
    }
    return <div>현재 시간은 {time} 입니다.<button onClick={timeHandler}>시간</button></div>
}

export default SampleApp;