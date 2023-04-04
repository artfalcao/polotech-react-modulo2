import React from 'react'
import style from './Wrapper.module.css'
import ButtonCounter from '../ButtonCounter/ButtonCounter'
import ArrayList from '../ArrayList/ArrayList'

const Wrapper = () => {
  return (
    <div className={style.wrapper}>
      <h2>Contador</h2>
      <ButtonCounter text="Clique aqui" active/>

      <ArrayList />    
    </div>
  )
}

export default Wrapper