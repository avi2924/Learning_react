import './App.css'
import Card from './components/Card'

let hehe = [
  {
    name : "delmnvn",
    text : "sddgkjasvkljsklvnksddvjskdvhj sDVJsn ksddv ksddnvjk sDKVJN",
    btntext : "c"
  },{
    name : "delsnba",
    text : "sddgkjasvkljsklvjhf sjf sjfi sijfnui nk sddvj",
    btntext : "ccccli"
  },{
    name : "delbksvla",
    text : "sddgkjasksbdvnjsjfsfjjsjkskvjsddv ksddnvjk sDKVJN",
    btntext : "cccclick"
  },{
    name : "dekjsvlba",
    text :"vjhbsshfiuuhif sihf shfi sdidsjvjsvkjsnN",
    btntext : "cccc"
  },{
    name : "dsbelba",
    text : "sddgkjasvkljsklvnk sddvj skdvhj sDVJsn ksddv ksddnvjk sDKVJN",
    btntext : "cjsgick"
  }
    ]

function App() {

  return (
    <div>
      { hehe.map((cardd)=>(
        <Card {...cardd} />
      ))}
    </div>
  )
}

export default App
