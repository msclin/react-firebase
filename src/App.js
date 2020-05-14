import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import HomePage from './pages/home-page/home-page';
import ShopPage from './pages/shop-page/shop-page';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-actions';


class App extends Component {
  constructor(props) {
    super(props);

    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header/>
        <Switch>
          <Route component={ HomePage } exact path='/'/>
          <Route component={ ShopPage } path='/shop'/>
          <Route exact path='/sign-in' render={ () => currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/> }/>
        </Switch>
      </div>
    ); 
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);