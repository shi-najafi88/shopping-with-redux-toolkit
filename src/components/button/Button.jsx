import React from 'react'
import './Button.css'

export const Button = ({title , clickHandler}) => {

  const ClickHanel = ()=> {
    clickHandler()
  }
  return (
    <button onClick={ClickHanel}>{title}</button>
  )
}
