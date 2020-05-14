import React from 'react';
import { Link } from 'react-router-dom';

import {
  ACCOUNT,
  ADMIN,
  HOME,
  LANDING,
  SIGN_IN,
  
} from '../../constants/routes';
import SignOut from '../SignOut';

const Navigation = () => (
  <div>
    <h1 className='title'>Navigation</h1>
    <ul>
      <li>
        <Link to={ SIGN_IN }>Sign In</Link>
      </li>
      <li>
        <Link to={ LANDING }>Landing</Link>
      </li>
      <li>
        <Link to={ HOME }>Home</Link>
      </li>
      <li>
        <Link to={ ACCOUNT }>Account</Link>
      </li>
      <li>
        <Link to={ ADMIN }>Admin</Link>
      </li>
      <li>
        <SignOut/>
      </li>
    </ul>
  </div>
);

export default Navigation;