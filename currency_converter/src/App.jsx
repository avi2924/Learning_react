import './App.css'
import React from 'react'
import InputBox from './components/InputBox'
import CurrencyConversion from './hooks/CurrencyConversion'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'

function App() {
  const [from,setfrom] = useState("usd");
  const [to,setto] = useState("inr");
  const [amount,setamount] = useState(1);
  const [convertedamount,setconvertedamount] = useState(0);

  const currencies = CurrencyConversion(from)
  const options = Object.keys(currencies);

  const swap = useCallback(()=>{
    setfrom(to);
    setto(from);
    setamount(convertedamount);
    setconvertedamount(amount);
  },[to,from,amount,convertedamount])

  const convert = useCallback(()=>{
      setconvertedamount(amount * currencies[to])
  },[to,amount,currencies])

  useEffect(()=>{
    convert();
  },[setto,convert])

  return (
    <>
      <form onSubmit={(e)=>{
        e.preventDefault();
        convert(); 
      }}>
        <div className='inputt'>
          <InputBox label="From"
                    amount={amount}
                    options={options}
                    oncurrencychange={(from)=>setfrom(from)}
                    onamountchange={(amount)=>setamount(amount)}
                    selectedCurrency={from}
                    /> 
        </div>
        <div className='inputt'> 
          <InputBox label="To"
                    amount={convertedamount}
                    options={options}
                    oncurrencychange={(to)=>setto(to)}
                    onamountchange={(amount)=>setamount(amount)}
                    selectedCurrency={to}
                    />
        </div>
        <div>
          <button onClick={()=>{swap();setamount(1);}}>swap</button>
          <button type='submit'>Generate</button>
        </div>
      </form>
    </>
  )
}

export default App
