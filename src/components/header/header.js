import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div>
    <p>{ currentUser ? currentUser.displayName : null }</p>
    <Link to='/'>Home</Link>
    <Link to='/shop'>Shop</Link>
    {
      currentUser ? <button onClick={ () => auth.signOut() }>Log Out</button> : <Link to='/sign-in'>Sign In</Link>
    }
  </div>
);

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);