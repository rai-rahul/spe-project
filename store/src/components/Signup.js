import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

export default class Signup extends Component {
  render() {
    return (
            <body class="body">
            <div class="login-page">
            <h2>&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;SIGN UP </h2>
            <div class="form">

                <form>
                <input id="txtEmail" type="email" placeholder="&#xf007;  email"  />
                <input id="txtPassword"  type="password" placeholder="&#xf023;  password" />           
                <p className="message"></p>
                </form>
            <form class="login-form">
                <button id="btnSignUp" type="button">SIGN UP</button>
            </form>
            <Link to="/login">
            <form class="login-form">
                <button type="button" onclick="window.location.href='login.html'">LOGIN</button>
            </form>
            </Link>
            </div>
            </div>
            <script src="../config/Fire.js" defer>

            </script>
            </body>
    )
  }
}
