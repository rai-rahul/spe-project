import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Login from "./components/Login";
import Signup from "./components/Signup";
import fire from './components/Fire';
import Product from "./components/Product";
class App extends Component {

constructor(){
    super();
    this.state=({
      user:null,
    });
    this.authListener = this.authListener.bind(this);
}
componentDidMount(){
  this.authListener();
}


authListener(){
  fire.auth().onAuthStateChanged((user)=>{
    console.log(user)
    if(user){
      this.setState({user});
    }
    else{
      this.setState({user:null});
    }
  });
}

  render() {
    return (
      <React.Fragment>
        {this.state.user ? (<ProductList/>):(<Login/>)}

        <Switch>
          <Route path="/details" component={Details} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
