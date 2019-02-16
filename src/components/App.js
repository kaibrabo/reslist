import React, { Component } from 'react';
import Login from './login';
import ListItem from './list-item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      reservations: [],
      
      newReservation: {
        name: '',
        phone: '',
        numGuests: '',
        isSeated: false
      }
    };
  }
  
  toggleComplete(index) {
    // creates new array
    const reservations = this.state.reservations.slice();
    const reservation = reservations[index];
    
    // checks bool and sets inverse value
    // if true, set false / if false, set true
    reservation.isSeated = reservation.isSeated ? false : true;
    
    // applies new array to the reservations prop in state
    this.setState( { reservations: reservations });
  }
  
  handleSubmit(e) {
    // blocks page reload
    e.preventDefault();
    
    // checks for new values
    if (!this.state.newReservation) {
      return;
    }
    
    // capture input values
    const newRes = {
      name: this.state.newReservation.name,
      phone: this.state.newReservation.phone,
      numGuests: this.state.newReservation.numGuests,
      isSeated: this.state.newReservation.isSeated
    };
    
    // sets new state
    this.setState({
      reservations: [ ...this.state.reservations, newRes ],
      newReservation: ''
    });
  }
  
  handleChange(e) {
    let nameVal, phoneVal, guestsVal, numGuestsVal;
    
    // sets input values
    nameVal = document.getElementById("name").value;
    phoneVal = document.getElementById("phone").value;
    guestsVal = document.getElementById("numGuests").value;
    
    // converts str to int
    numGuestsVal = Number(guestsVal);
    
    // sets newReservation values
    this.setState({ newReservation: {
                    name: nameVal,
                    phone: phoneVal,
                    numGuests: numGuestsVal,
                    isSeated: false
                  }
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h1>res<span>list</span></h1>
          <Login />
        </div>
        <form onSubmit={e => {this.handleSubmit(e)}}>
            <input type="text" 
                   placeholder=" name"
                   id="name"
                   value={this.state.newReservation.name}
                   onChange={e => this.handleChange(e)}/>
            <input type="tel" 
                   placeholder=" phone"
                   id="phone"
                   maxLength="10"
                   value={this.state.newReservation.phone}
                   onChange={e => this.handleChange(e)}/>
            <input type="number" // Only allows integers for input
                   placeholder=" # of guests"
                   id="numGuests"
                   min="1"
                   value={this.state.newReservation.numGuests}
                   onChange={e => this.handleChange(e)}/>

            
            <input type="submit" />
        </form>
        <ul>
          {   
            this.state.reservations.map((item, index) => (
              <ListItem key={index} 
                        name={item.name}
                        phone={item.phone}
                        numGuests={item.numGuests}
                        isSeated={item.isSeated}
                        toggleComplete={() => this.toggleComplete(index)}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
