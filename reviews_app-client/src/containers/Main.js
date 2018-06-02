import React from 'react';
import { Switch, Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser} from "../store/actions/auth";
import { removeError} from "../store/actions/errors";
import WatchMoviePageContainer from './WatchMoviePageContainer';

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
  return(
    <div>
      <Switch>
        <Route
          exact
          path='/'
          render={props => {
            return(
              <Homepage
                currentUser={currentUser}
                {...props}
              />
            )
          }}
        />
        <Route
          exact
          path='/signup'
          render={props => {
            return(
              <AuthForm
                removeError={removeError}
                errors={errors}
                signUp
                onAuth={authUser}
                buttonText='SIGN UP'
                heading='Review best movies.'
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path='/login'
          render={props => {
            return(
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText='LOG IN'
                heading='Welcome Back.'
                {...props}
              />
            );
          }}
        />
        <Route
          path='/movies/:id'
          // component={WatchMoviePageContainer}
          render={props => {
            return(
              <WatchMoviePageContainer
                {...props}
              />
            )
          }}
        />
      </Switch>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));