import React from 'react'
import { Button } from '../button/Button'
import {useDispatch , useSelector} from 'react-redux'
import { ADD } from '../../redux/ShoppingSlice'
import './Card.css'

export const Card = ({item}) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.order)

  const AddToCartHandler = ()=> {
    dispatch(ADD(item))
    // console.log(state.cartItems);
  }
   
  return (
        <div className="card-container">
          <div className="img-container">
            <img src={item.img} />
          </div>
          <p>{item.name}</p>
          <span>{item.price}</span>
          <div className="infoBtn">
            <Button clickHandler={()=>AddToCartHandler(item)} title={"ADD TO CART"} />
            <p>DETAILS</p>
          </div>
        </div>
  )
}
