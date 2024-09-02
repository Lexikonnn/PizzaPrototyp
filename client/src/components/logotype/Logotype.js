import React, { useEffect, useState } from 'react';
import "./Logotype.css";

const Logotype = ({ isVisible }) => {
    const [textColorClass, setTextColorClass] = useState('text-black');

    useEffect(() => {
        if (isVisible) {
            setTextColorClass('black');
        } else {
            setTextColorClass('white');
        }
    }, [isVisible]);

    return (
        <div className='logo-wrapper'>
            <div>
                <h1 className={`logo-pizza ${textColorClass}`}>Pizza</h1>
                <h1 className={`logo-fast ${textColorClass}`}>Fast</h1>
            </div>
        </div>
    );
};

export default Logotype;
