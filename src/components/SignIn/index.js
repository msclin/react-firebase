import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { HOME } from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { SignUpLink } from '../SignUp';

const SignIn = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm/>
    <SignUpLink/>
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
  password: ''
}

class SignInFormBase extends Component {
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

    const { email, password } = this.state;

    this.props.firebase
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(HOME);
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const { onChange, onSubmit } = this;
    const { email, error, password } = this.state;
    const isInvalid = email === '' || password === '';

    return (
      <form onSubmit={ onSubmit }>
        <input
          name='email'
          onChange={ onChange }
          placeholder='Email'
          type='text'
          value={ email }/>
        <input
          name='password'
          onChange={ onChange }
          placeholder='Password'
          type='password'
          value={ password }/>
        <button disabled={ isInvalid } type='submit'>Sign In</button>
        { error && <p>{ error.message }</p>}
      </form>
    );
  }
}

const SignInForm = compose(withFirebase, withRouter)(SignInFormBase);

export default SignIn;

export { SignInForm };