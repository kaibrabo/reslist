import React, { Component } from 'react';
import './list-item.css';

class ListItem extends Component {
    render() {
        console.log(this.props.id)
        return (
            <li key={this.props.id}>
                <p>name: {this.props.name}</p>
                <p>phone: {this.props.phone}</p>
                <p>guests: {this.props.numGuests}</p>
                <input type="checkbox" 
                       checked={this.props.isSeated}
                       onChange={this.props.toggleComplete}/>
                <button className="remove-btn"
                        onClick={() => this.props.removeReservation(this.props.id)}>Remove</button>
            </li>
        )
    }
}

export default ListItem;