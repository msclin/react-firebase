import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { HOME, SIGN_UP } from '../../constants/routes';


const SignUp = () => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm/>
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: '',
  passwordOne: '',
  passwordTwo: '',
  username: ''
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { email, passwordOne, username } = this.state;

    console.log(this.props.firebase);

    this.props.firebase
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(_ => { 
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(HOME);
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const { onChange, onSubmit } = this;
    const { email, error, passwordOne, passwordTwo, username } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

    return (
      <div>
        <form onSubmit={ onSubmit }>
          <input
            name='username'
            onChange={ onChange }
            placeholder='Username'
            type='text'
            value={ username }/>
          <input
            name='email'
            onChange={ onChange }
            placeholder='Email'
            type='text'
            value={ email }/>
          <input
            name='passwordOne'
            onChange={ onChange }
            placeholder='Password'
            type='password'
            value={ passwordOne }/>
          <input
            name='passwordTwo'
            onChange={ onChange }
            placeholder='Confirm Password'
            type='password'
            value={ passwordTwo }/>
          <button disabled={ isInvalid } type="submit">Sign Up</button>
          { error && <p>{ error.message }</p> }
        </form>
      </div>
    );
  }
}

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ SIGN_UP }>Sign Up</Link>
  </p>
);

export { SignUpForm, SignUpLink };

export default SignUp;