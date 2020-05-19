import React from 'react';
import './App.css';
import CreateNewItem from './CreateNewItem.js'
import DeleteItem from './DeleteItem.js'
import ItemList from './ItemList.js'
import Header from './Header.js'

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <h2>Shopping List</h2>
        <CreateNewItem onAddItem = {this.addItem} />
        <DeleteItem deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound} />
        <p className="items">Items</p>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
