import React from 'react'
import style from "./errorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={style.error}>
        <p>{props.error}</p>
        <button onClick={props.onClose}>Close error</button>
    </div>
  )
}

export default ErrorModal