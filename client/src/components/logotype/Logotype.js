import React, { useEffect, useState } from 'react';
import "./Logotype.css";

const Logotype = ({ isVisible }) => {
    const [colorClass, setColorClass] = useState('text-black');

    useEffect(() => {
        console.log("Visibility changed:", isVisible); // Debugging
        if (isVisible) {
            setColorClass('black');
        } else {
            setColorClass('white');
        }
    }, [isVisible]);

    return (
        <div className={`logo-wrapper ${colorClass}`}>
            <h1 className="logo-pizza">Pizza</h1>
            <h1 className="logo-fast">Fast</h1>
        </div>
    );
};

export default Logotype;
