import React from 'react';

export default function AddItem(props){
    return (
        <>
            <form onSubmit={props.onAddItem}>
                <input name='item' type="text"></input>
                <button type="submit">Add Item</button>
            </form>
            <input type="text" onChange={props.onFilter}></input>
        </>
    )
}

