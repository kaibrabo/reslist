import React, { Component } from 'react';
import './list-item.css';

class ListItem extends Component {
    render() {
        return (
            <li>name: {this.props.name} phone: {this.props.phone}</li>
        )
    }
}

export default ListItem;