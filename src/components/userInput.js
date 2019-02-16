import React, { Component } from 'react';
import './userInput.css';

class UserInput extends Component {
    
    // ISSUE:
    // the onSubmit attribute can't call 
    // the handleSubmit() in app.js

    render() {
        return (
            <div className="user-input-container">
                <form onSubmit={(e) => {this.handleSubmit(e)}}>
                    <input type="text" placeholder="name" />
                    <input type="tel" placeholder="phone" />
                    <input type="number" placeholder="# of guests" />

                    
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default UserInput;