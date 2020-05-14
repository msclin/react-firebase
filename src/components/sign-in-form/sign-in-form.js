import React, { Component } from 'react';

import './sign-in-form.scss';

import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log('something went wrong', error);
    }
  }

  render() {
    const { handleChange, handleSubmit, state: { email, password } } = this;

    return (
      <div>
        <h2>I already have an account.</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={ handleSubmit }>
          <FormInput
            handleChange={ handleChange }
            id='email'
            label='Email'
            labelFor='email'
            name='email'
            required
            type='email'
            value={ email }/>
          <FormInput
            handleChange={ handleChange }
            id='password'
            label='Password'
            labelFor='password'
            name='password'
            required
            type='password'
            value={ password }/>
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
        <CustomButton onClick={ signInWithGoogle }>Sign In With Google</CustomButton>
      </div>
    );
  }
}

export default SignInForm;