import React from 'react';

export default function AddItem(props){
    return (
        <>
            <form onSubmit={props.onAddItem}>
                <div class="form-group">
                    <input  name='item' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
            <input type="text" onChange={props.onFilter}></input>
        </>
    )
}

