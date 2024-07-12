/* eslint-enable react/jsx-key */
import './App.css'
import { useState} from 'react'
import coolor from './data.mjs'
import Button from './components/button/Button'
import { Fragment } from 'react';

function App() {
  let [color, setColor] = useState("black");

  /* const change = (h)=> {
    console.log("color changed to ",h.text)
    setColor(h.text);
  } */

  return (
    <Fragment>
      <div className="main" style={{backgroundColor:color}}>
        <div className="mainmain">
            {
                coolor.map((item, index) =>
                  <Button key={index} {...item}  onClick={() => setColor(item.back_colour)}  />
                ) 
            }
        </div>
      </div>
    </Fragment>
  )
}

export default App
