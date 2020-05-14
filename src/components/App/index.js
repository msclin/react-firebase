import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Account from '../Account';
import Admin from '../Admin';
import Home from '../Home';
import Landing from '../Landing';
import Navigation from '../Navigation';
import PasswordForget from '../PasswordForget';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

import {
  ACCOUNT,
  ADMIN,
  HOME,
  LANDING,
  SIGN_IN,
  SIGN_UP,
  PASSWORD_FORGET,
  
} from '../../constants/routes';

const App = () => (
  <div>
    <BrowserRouter>
      <Navigation/>
      <hr/>
      <Route component={ Landing } exact path={ LANDING }/>
      <Route component={ SignUp } path={ SIGN_UP }/>
      <Route component={ SignIn } path={ SIGN_IN }/>
      <Route component={ PasswordForget } path={ PASSWORD_FORGET }/>
      <Route component={ Home } path={ HOME }/>
      <Route component={ Account } path={ ACCOUNT }/>
      <Route component={ Admin } path={ ADMIN }/>
    </BrowserRouter>
  </div>
);

export default App;