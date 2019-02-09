import React, { Component } from 'react';
import Login from './login';
import UserInput from './userInput';
import ListItem from './list-item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      reservations: [
      {name: "Guest 1", phone: "4154154155", isSeated: true},
      {name: "Guest 2", phone: "4154245861", isSeated: false},
      {name: "Guest 3", phone: "4154545544", isSeated: false}
    ]};
  }
  
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h1>res<span>list</span></h1>
          <Login />
        </div>
        <UserInput />
        <ul>
          {   
            this.state.reservations.map((item, index) => (
              <ListItem key={index} 
                        name={item.name}
                        phone={item.phone}
                        isSeated={item.isSeated}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
