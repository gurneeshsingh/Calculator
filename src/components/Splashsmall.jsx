import React from 'react'
import Lottie from "lottie-react"
import calculatorsmall from "../animations/cal2.json";

const Splashsmall = () => {
    return (
        <Lottie animationData={calculatorsmall} loop={true}  style={{ height: "100%", width: "100%" }} />
    )
}

export default Splashsmall