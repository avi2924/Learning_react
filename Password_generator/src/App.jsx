import React from 'react'
import { useRef } from 'react'
import './App.css'
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

function App() {
  const pass = useRef(null);
  const [length,setLength] = useState(15);
  const [isNumbersAllowed,setIsNumbersAllowed] = useState(false);
  const [isSymbolsAllowed,setIsSymbolsAllowed] = useState(false);
  let [password,setPassword] = useState('');

  const copytoclipboard = useCallback(()=>{
      pass.current?.select();
      window.navigator.clipboard.writeText(password);
  },[password])

  const generatePassword = useCallback(() => {
      let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let numbers = '0123456789';
      let symbols = '!@#$%^&*()_+';
      let passwordVal = '';

      if(isNumbersAllowed){
        chars+=numbers;
      }
      if(isSymbolsAllowed){
        chars+=symbols;
      }
      const str = chars.split("");
      str.sort(() => Math.random() - 0.5);
      chars = str.join("");
      console.log(chars);
      for(let i = 1; i<=length; i++){
        let num = Math.floor(Math.random()*(chars.length-1))
        passwordVal += chars[num];
      }
      setPassword(()=>({password}= passwordVal))
      console.log("gen")
  },[length,isNumbersAllowed,isSymbolsAllowed,setPassword])

  useEffect(()=>{
    generatePassword();
  },[generatePassword])

  return (
    <>
      <div className='Password-genrator'>
            <div>
                <h1>Password Generator</h1>
                <input type="text" id="password" value={password} placeholder="Password" ref={pass}/>
                <div className='buttons'>
                  <button onClick={generatePassword}>Generate</button>
                  <button onClick={copytoclipboard}>Copy</button>
                </div>
                <input type="range" name="range" value={length} min={10} max={50} onChange={(e)=>setLength(e.target.value)}/>
                <label>Length:{length}</label>
                <input type="checkbox" 
                       name="isNumbersallowed" 
                       defaultValue={false} 
                       onChange={()=>setIsNumbersAllowed((prev)=>(!prev))}/>
                <label>Numbers</label>
                <input type="checkbox" 
                       name="isSymbolsAllowed" 
                       defaultValue={false} 
                       onChange={()=>setIsSymbolsAllowed((prev)=>(!prev))}/>
                <label>Characters</label>
            </div>
      </div>
    </>
  )
}

export default App
