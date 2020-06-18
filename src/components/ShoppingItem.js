import React from 'react';


export default class ShoppingItem extends React.Component {

    componentWillUnmount(){
        console.log('Component is Unmounting ShoppingItem')
    }

    render(){
        let myStyle ={
            width: '200px',
            margin: '20px',
        }
    
        let pStyle = {
            textDecoration: this.props.shoppingItem.completed ? 'line-through': ''
        }
        return (
            <div className="card" style={myStyle}>
                <div className="card-body">
                <h5 className="card-title" style={pStyle}>{this.props.shoppingItem.title}</h5>
                <button type="button" className="btn btn-primary"  name="check" onClick={() => {this.props.onCheck(this.props.shoppingItem.title)}}>Check</button>
                <button type="button" className="btn btn-danger" onClick={() => {this.props.onDelete(this.props.shoppingItem.title)}}>Delete</button>
                </div>
            </div>
        )
    }
}
