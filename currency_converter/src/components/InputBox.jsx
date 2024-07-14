import React from "react";
import PropTypes from 'prop-types';
import './input.css'

function InputBox({
    label,
    amount,
    options =[],
    oncurrencychange,
    onamountchange,
    selectedCurrency = "usd"

}) {
    return (
        <>

            <label>{label}: </label>
                <input type="number" name="fromcurrency" value={amount} onChange={(e)=>onamountchange && onamountchange(Number(e.target.value))}/>
                <label>Currency</label>
                <select
                    value={selectedCurrency}
                    onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)}>
                    {
                        options.map((currency)=>(
                            <option key={currency} value={currency}>{currency}</option>
                        ))
                    }
                </select>
        
        </>
    );
}

InputBox.propTypes = {
    from: PropTypes.string,
    amount: PropTypes.number, // Assuming 'from' is a string, adjust as necessary
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    oncurrencychange: PropTypes.func.isRequired,
    onamountchange: PropTypes.func.isRequired,
};

export default InputBox;