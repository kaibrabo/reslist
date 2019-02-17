import React, {Component} from 'react';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
        );
    }
}


export default Login;