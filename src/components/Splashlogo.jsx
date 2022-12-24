import React from 'react'
import Lottie from "lottie-react"
import calculatorAnimation from "../animations/calculator.json";


const Splashlogo = () => {
    return (
      <div className="wrapper">
      <Lottie animationData={calculatorAnimation} loop={true} rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} style={{  height: "100%", width: "100%", overflow:"hidden", transition:"0.4s all ease" }} />

      </div>
  )
}

export default Splashlogo