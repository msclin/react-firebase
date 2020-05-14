import React from 'react';

import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmPassword: '',
      displayName: '',
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { confirmPassword, displayName, email, password } = this.state;

    if (password !== confirmPassword) {
      alert('The passwords do not match.');

      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        confirmPassword: '',
        displayName: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.log('Something went wrong:', error);
    }
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { confirmPassword, displayName, email, password } = this.state;

    return (
      <div>
        <h2>I do not have an account.</h2>
        <span>Sign up with your email and password.</span>
        <form onSubmit={ handleSubmit }>
          <FormInput
            handleChange={ handleChange }
            id='displayName'
            label='Display Name'
            labelFor='displayName'
            name='displayName'
            required
            type='text'
            value={ displayName }/>
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
          <FormInput
            handleChange={ handleChange }
            id='confirmPassword'
            label='Confirm Password'
            labelFor='confirmPassword'
            name='confirmPassword'
            required
            type='password'
            value={ confirmPassword }/>
          <CustomButton type='submit'>Create Account</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUpForm;