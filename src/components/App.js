import React, { Component } from 'react';
import Login from './login';
// import ListItem from './list-item';
import firebase from '../firebase'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      reservations: [],
      
      newReservation: {
        id: '',
        name: '',
        phone: '',
        numGuests: 1,
        isSeated: false
      }
    };
  }
  
  componentDidMount() {
    // initialize firebase DB
    const reservationsRef = firebase.database().ref('reservations');
    
    // GET reservations data from DB
    reservationsRef.on('value', res => {
      let reservations = res.val();
      let newState = [];
      
      // loops and sets each object,
      // then pushes each object into [newState]
      for (let res in reservations) {
        newState.push({
          id: res,
          name: reservations[res].name,
          phone: reservations[res].phone,
          numGuests: reservations[res].numGuests,
          isSeated: reservations[res].isSeated
        });
      }
      
      // sets state to display data
      this.setState({ reservations: newState });
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
  
  toggleComplete(itemId, item) {
    // GET reservation object
    const resRef = firebase.database().ref(`/reservations/${itemId}/isSeated`);

    // checks bool and sets inverse value
    // if false, set true / if true, set false
    if (!item.isSeated) {
      resRef.set(true);
    } else {
      resRef.set(false);
    }
  }
  
  handleSubmit(e) {
    // initialize firebase DB
    const reservationsRef = firebase.database().ref('reservations');
    
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
    
    // pushes newRes to firebase DB
    reservationsRef.push(newRes);
  }
  
  removeReservation(resId) {
    const resRef = firebase.database().ref(`/reservations/${resId}`);
    resRef.remove();
  }
  
  render() {
    return (
      <div className="App">
  
        <div className="navbar">
          <h1>res<span>list</span></h1>
          <Login />
        </div>
  
        {/* Reservation Input Form */}
        <form onSubmit={e => {this.handleSubmit(e)}} className="res-form">
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <div>
                    <input type="text" 
                           placeholder=" name"
                           id="name"
                           value={this.state.newReservation.name}
                           onChange={e => this.handleChange(e)}/>
                  </div>
                </td>
              </tr>
  
              <tr>
                <td>Phone:</td>
                <td>
                  <div>
                    <input type="tel" 
                           placeholder=" phone"
                           id="phone"
                           maxLength="10"
                           value={this.state.newReservation.phone}
                           onChange={e => this.handleChange(e)}/>
                  </div>
                </td>
              </tr>
              
              <tr>
                <td>Guests:</td>
                <td>
                  <div>
                    <input type="number" // Only allows integers for input
                           placeholder=" # of guests"
                           id="numGuests"
                           min="1"
                           value={this.state.newReservation.numGuests}
                           onChange={e => this.handleChange(e)}/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" />
        </form>
  
        {/* Display Reservation List */}
        <div className="res-list">
          <ul>
            {this.state.reservations.map((item) => {
                return <li key={item.id}>
                    <p>name: {item.name}</p>
                    <p>phone: {item.phone}</p>
                    <p>guests: {item.numGuests}</p>
                    <input type="checkbox" 
                           checked={item.isSeated}
                           onChange={() => this.toggleComplete(item.id, item)}/>
                    <button className="remove-btn"
                            onClick={() => this.removeReservation(item.id)}>Remove</button>
                </li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
