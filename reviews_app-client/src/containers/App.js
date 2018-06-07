import React from "react";
import { Provider } from 'react-redux';
import { configureStore } from "../store";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from 'jwt-decode';

const store = configureStore();

if(localStorage.jwToken) {
  setAuthorizationToken(localStorage.jwToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwToken)))
  } catch (err) {
    store.dispatch(setCurrentUser({}))
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='onboarding'>
        <Route
          path='/'
          render={props => {
            return (<Navbar {...props}/>)
          }}
        />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
