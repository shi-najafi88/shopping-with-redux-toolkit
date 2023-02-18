import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../button/Button'
import {AiOutlineClose} from 'react-icons/ai'
import {FaRegTrashAlt} from 'react-icons/fa'
import { CLEAR , DELET } from '../../redux/ShoppingSlice'
import './Modal.css'

export const Modal = ({setModalStatus}) => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.order)
    console.log(state);

    const CloseModal = ()=> {
        setModalStatus(false)
    }

    const ClearItemsModal = ()=> {
       dispatch(CLEAR([]))
    }

    const DeletItemHandler = (id)=> {
        dispatch(DELET(id))
        console.log('olll');
    }


  return (
    <div className='modalContainer'>
        <AiOutlineClose onClick={CloseModal} className='closeIcon'/>

<div className='modal-header'>
    <h1>Cart</h1>
    <p>This Is a Cart Page</p>
  </div>

  <div className='modal-main'>

    <div className='container-items'>
        {state.cartItems.map(item => (
             <div className='detailProduct-modal'>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <h4>qut:{item.quantity}</h4>
                <h5>price:{item.price}</h5>
                <FaRegTrashAlt onClick={()=>DeletItemHandler(item.id)} className='trashIcons'/>

             </div>    
        ))}
     
    </div>
    <div>
      <div className='container-price'>
        <p>TotalItems</p>
        <h4>{state.cartItems.length}</h4>
        <p>Total Payment</p>
        <h3>${state.cartTotalPrice}</h3>
        <hr></hr>
        <div className='wraber-btn'>
        <Button  title={"Checkout"}/>
        <Button clickHandler={ClearItemsModal} title={"Clear"}/>
      </div>
      </div>
      
    </div>
  </div>

    </div>
  )
}
