import React from 'react'
import style from './ArrayList.module.css'

const ArrayList = () => {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className={style.container}>
      {
        arr.length > 0 ? (<h2>Lista</h2>) : (<h2>Lista Vazia</h2>)
      }

      <ul>
        { arr.map((item, key) => (
            item % 2 === 0 && (<li key={key}>{item}</li>)
          ))
        }
      </ul>
    </div>
  )
}

export default ArrayList
