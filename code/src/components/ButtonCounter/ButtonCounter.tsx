import { useState } from 'react';
import style from './ButtonCounter.module.css'; 

export interface IButtonCounterProps {
  text : string,
  active ?: boolean
}

const ButtonCounter = ({ text, active = false } : IButtonCounterProps) => {

  const [counter, setCounter] = useState(0)

  const handleOnClick = () => {
    setCounter(counter + 1)
  }

  return (
    <div className={style.container}>
      <button 
        className={style.btn} 
        onClick={handleOnClick}
        disabled={!active}
      >
        {text} : {counter}
      </button>
    </div>
      
  )
}

export default ButtonCounter