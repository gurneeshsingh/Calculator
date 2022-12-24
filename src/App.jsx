import Calculator from "./components/Calculator";
import "./App.css";
import { useEffect, useState } from "react";
import Splashlogo from "./components/Splashlogo";

function App() {

  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(!showAnimation)
    }, 2500);
  }, [])
  
  if (showAnimation) {
    return <Splashlogo/>
  }

  return (
    <main className="container">
      <Calculator />
    </main>
  )
}

export default App
