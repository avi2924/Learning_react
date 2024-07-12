import React from "react";
import './Button.css';


const Button = ({ back_colour, onClick }) => {
    console.log('Button text:', back_colour); 
    return (
        <>
            <button onClick={onClick} style={{ backgroundColor: back_colour }}>
                {back_colour}
            </button>
        </>
    );
};

export default Button;