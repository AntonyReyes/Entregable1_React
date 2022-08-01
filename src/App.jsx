import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import color from './utils/colores'
import quotes from './JSON/quotes.json'

function App() {

  function getRandom(arr = []) {
    return arr[Math.trunc(Math.random() * arr.length)]
  }



 const quote =  getRandom(quotes)
 
  const [colors, setcolors] = useState(getRandom(color))
  const [quoteBox, setquoteBox] = useState(quote)

  const randomColor = {
    backgroundColor: colors,
    color: colors
  }

  const randomAll = () => {
    const a =  getRandom(quotes)
    const b =  getRandom(color)
    setcolors(b)
    setquoteBox(a)
  }
console.log(color);
  return (
    <div className="App" style={randomColor}>
      <QuoteBox colors = {colors}
      quoteBox ={quoteBox} randomAll = {randomAll}
       />
    </div>
  )
}

export default App
