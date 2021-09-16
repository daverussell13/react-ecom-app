import { Component } from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// utils
import { signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    })
  }

  changeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value },() => console.log(this.state[name]));
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.changeHandler}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Submit</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
