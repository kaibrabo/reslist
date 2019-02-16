import React, { Component } from 'react';
import './list-item.css';

class ListItem extends Component {
    render() {
        return (
            <li>
                <p>name: {this.props.name}</p>
                <p>phone: {this.props.phone}</p>
                <p>guests: {this.props.numGuests}</p>
                <input type="checkbox" 
                       checked={this.props.isSeated}
                       onChange={this.props.toggleComplete}/>
            </li>
        )
    }
}

export default ListItem;