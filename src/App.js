import React, {Component} from 'react';
import AddItem from './components/AddItem';
import ShoppingList from './components/ShoppingList';
import axios from 'axios'
import Loading from './components/Loading'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

    state = {
      items: [],
      filteredItems: [],
    }

    componentDidMount(){
       console.log('Component Mounted App.js')
       setTimeout(() => {
          axios.get('https://jsonplaceholder.typicode.com/todos')
          .then((res) => {
              console.log(res.data)
              this.setState({
                items: res.data,
                filteredItems: res.data
              })
          })
       }, 2000)
    }

    componentDidUpdate() {
        console.log('Something was updated App.js')
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
      console.log('Inside render App.js')

      if (!this.state.items.length){
        return (
          <Loading />
        )
      }


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
