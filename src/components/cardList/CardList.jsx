import React from 'react'
import { Card } from '../card/Card'
import './CardList.css'
import { Products } from '../../Data'

export const CardList = () => {
  return (
    <div className="CardList-container">
        {Products.map((item) => (
           <Card item={item}  key={item.id}/>
            
        ))}
       
    
    </div>
  )
}
