import React from "react";
import './Heading.css';

const Heading = ({label, color, size}) => {
    
    return (
        <heading 
            className={['heading', `color-${color}`, `size-${size}`].join(' ')}
        >
        {label}
        </heading>
    );
}

export default Heading;
