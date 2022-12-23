
import { useState } from 'react';
import './App.css'

function App() {
  let [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [showHeading, setShowHeading] = useState(true);

  function handleClick(event) {
    const value = event.target.value.toString();
    let evalResult;
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        // handling duplication of same or different operations
        if (input.slice(-1) === value) {
          setInput(input);
          setShowHeading(false)
        } else if ((input.slice(-1) === "+" || input.slice(-1) === "-" || input.slice(-1) === "*" || input.slice(-1) === "/") && input.slice(-1) !== value) {
          input = input.split("")
          input[input.length - 1] = value
          input = input.join("")
          setInput(input);
          setShowHeading(false)
        }
        else {
          setInput(input + value);
          setShowHeading(false)
          try {
            evalResult = eval(input);
            setResult(evalResult);
          } catch (error) {
            setResult('Error');
          }
        }

        break;
      case '=':
        if ((input.slice(-1) === "+" || input.slice(-1) === "-" || input.slice(-1) === "*" || input.slice(-1) === "/")) {
          setShowHeading(false)
          break;
        } else {
          try {
            evalResult = eval(input);
            setResult(evalResult);
          } catch (error) {
            setResult('Error');
          }
          break;
        }

      case 'C':
        setInput('');
        setResult(0);
        setShowHeading(false)
        break;
      default:
        setInput(input + value);
        setShowHeading(false)
    }
  }

  return (
    <main className="calculator">
      <section className="display">
       {showHeading&& <p className="heading">Calculator</p>}
        <textarea type="text" id='history' value={input } readOnly />
        <textarea type="text" id='current' value={result || input} readOnly />
      </section>
      <section className="buttons-grid">
        <button value="7" className='number' onClick={handleClick}>7</button>
        <button value="8" className='number' onClick={handleClick}>8</button>
        <button value="9" className='number' onClick={handleClick}>9</button>
        <button value="+" className='operation' onClick={handleClick}>+</button>
        <button value="4" className='number' onClick={handleClick}>4</button>
        <button value="5" className='number' onClick={handleClick}>5</button>
        <button value="6" className='number' onClick={handleClick}>6</button>
        <button value="-" className='operation' onClick={handleClick}>-</button>
        <button value="1" className='number' onClick={handleClick}>1</button>
        <button value="2" className='number' onClick={handleClick}>2</button>
        <button value="3" className='number' onClick={handleClick}>3</button>
        <button value="*" className='operation' onClick={handleClick}>*</button>
        <button value="C" className='clear' onClick={handleClick}>C</button>
        <button value="0" className='number' onClick={handleClick}>0</button>
        <button value="=" className='operation' onClick={handleClick}>=</button>
        <button value="/" className='operation' onClick={handleClick}>/</button>
      </section>

    </main>
  )
}

export default App
