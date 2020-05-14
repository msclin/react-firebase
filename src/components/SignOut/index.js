import React from 'react';

import { withFirebase } from '../Firebase';

const SignOut = ({ firebase }) => (
  <div>
    <button onClick={ firebase.signOut } type='button'>
      Sign Out
    </button>
  </div>
);

export default withFirebase(SignOut);