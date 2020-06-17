import React from 'react';

export default function ShoppingItem(props){

    let myStyle ={
        border: '1px solid black',
        margin: '20px',
        padding: '10px',
        width: '200px',
    }

    let pStyle = {
        textDecoration: props.shoppingItem.completed ? 'line-through': ''
    }

    return (
        <div  style={myStyle}>
            <p name="item" style={pStyle}>{props.shoppingItem.title}</p>
            <div>
                <button name="check" onClick={() => {props.onCheck(props.shoppingItem.title)}}>Check</button>
                <button onClick={() => {props.onDelete(props.shoppingItem.title)}}>Delete</button>

            </div>
        </div>
    )
}
