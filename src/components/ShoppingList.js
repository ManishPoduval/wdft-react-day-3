import React from 'react';
import ShoppingItem from './ShoppingItem'

export default function ShoppingList(props){
    return (
        <>
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
        </>
    )
}
