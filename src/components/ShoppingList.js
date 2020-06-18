import React from 'react';
import ShoppingItem from './ShoppingItem'
import '../App.css'

export default function ShoppingList(props){
    return (
        <div className="shoppingContainer">
          {
              props.items.map((item, index) => {
                 return <ShoppingItem 
                    key={index} 
                    shoppingItem={item}
                    onCheck={props.onCheck}
                    onDelete={props.onDelete}
                 />              
              })
          }  
        </div>
    )
}
