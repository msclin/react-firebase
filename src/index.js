import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import App from './components/App';

import store from './redux/store';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={ new Firebase() }>
      <App/>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
