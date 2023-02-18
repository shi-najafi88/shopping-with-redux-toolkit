import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useState } from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import { Store } from '../../../../../cw34/src/redux/Store'
export const Header = ({setModalStatus}) => {
  const state = useSelector((state) => state.order)
  
  const ShowModal= ()=> {
    setModalStatus(true)
  }
  return (
    <header>
    <ul>
      <li>Store</li>
      <li>About</li>
      <li onClick={ShowModal}> <FaShoppingCart /> Cart({state.cartItems.length})</li>
    </ul>
    <div className="heading-container">
      <h1>Store</h1>
      <h3>This is the Store Page.</h3>
    </div>
  </header>
  )
}
