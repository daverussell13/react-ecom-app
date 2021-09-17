import { Component } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitHandler = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth,email,password);
      await createUserProfileDocument(userCredentials.user,{displayName});
      // reset state
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    } catch (err) {
      alert(err.message);
    }
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.submitHandler}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            changeHandler={this.changeHandler}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            changeHandler={this.changeHandler}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            changeHandler={this.changeHandler}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            changeHandler={this.changeHandler}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;