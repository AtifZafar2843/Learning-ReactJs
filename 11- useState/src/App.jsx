import { useState } from 'react';
import './App.css'

function App() {
  const [num, setNum] = useState(10)

  function incraseNum(){
    setNum(num+1)
  }
  function decraseNum(){
    setNum(num-1)
  }
  function jump5Num(){
    setNum(num+5)
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={incraseNum}>Increase</button>
      <button onClick={decraseNum}>Decrease</button>
      <button onClick={jump5Num}>Jump by 5</button>
    </>
  )
}

export default App
