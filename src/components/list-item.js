import React, { Component } from 'react';
import './list-item.css';

class ListItem extends Component {
    render() {
        return (
            <li>
                <p>name: {this.props.name}</p>
                <p>phone: {this.props.phone}</p>
                <input type="checkbox" checked={this.props.isSeated} />
            </li>
        )
    }
}

export default ListItem;