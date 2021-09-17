import { Component } from "react";
import { Route, Switch } from "react-router-dom";

// css
import "./App.css";

// pages
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

// utils
import { auth } from "./firebase/firebase.util";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  // default val
  unsubscribeFromAuth = null;

  componentDidMount() {
    // onAuthStateChange returns unsubscribe function for the observer
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    // simply call the unsubscribe function
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;