import React, {Component} from 'react';
import AddItem from './components/AddItem';
import ShoppingList from './components/ShoppingList';

let data = [
  {title: 'Bread', completed: true},
  {title: 'Milk', completed: true},
  {title: 'Eggs', completed: false}
];

class App extends Component {

    state = {
      items: data,
      filteredItems: data
    }

    handleAddItem = (e) => {
      e.preventDefault()  // preventing event bubbling
      let name = e.target.item.value
      this.setState({
        items: [...this.state.items, {title: name, completed: false}],
        filteredItems:  [...this.state.items, {title: name, completed: false}] 
      })
    }

    handleCheck = (name) => {
      //Bread
      let newItems = [...this.state.items]   
      newItems.forEach((item) => {
            if (item.title === name){
              item.completed = !item.completed
            }
      })

      this.setState({
        items: newItems,
        filteredItems: newItems,
      })
    }

    handleDeleteItem = (itemName) => {
        let newItems = this.state.items.filter((item) => {
            return item.title !== itemName
        })

        this.setState({
          items: newItems,
          filteredItems: newItems,
        })
    }

    handleFilter = (event) => {
        let inp = event.target.value //Bre
        let newItems = this.state.items.filter((item) => {
            return item.title.startsWith(inp)
        })

        this.setState({
          filteredItems: newItems
        })
    }

    render(){
      return (
        <>
         <AddItem 
          onAddItem={this.handleAddItem}
          onFilter={this.handleFilter}
          /> 
         <ShoppingList 
          items={this.state.filteredItems}
          onCheck={this.handleCheck}
          onDelete={this.handleDeleteItem}
          />    
        </>
      )
    }
}

export default App;
