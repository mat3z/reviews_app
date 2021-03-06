import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? 'signup' : 'login';
    console.log(authType);
    this.props.onAuth(authType, this.state)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(() => {
        return;
      });
  };

  render() {
    const { username, password } = this.state;
    const { heading, buttonText, errors, history, removeError } = this.props;

    history.listen(() => {
      removeError();
    });

    return(
      <div>
        <div>
          <form onSubmit={this.handleSubmit} className='authForm'>
            <h1 className='headline'>{heading}</h1>
            {errors.message && (
              <div className='alert'>{errors.message}</div>
            )}
            {/*<label htmlFor="username">Username:</label>*/}
            <input
              type="text"
              id='username'
              name='username'
              onChange={this.handleChange}
              value={username}
              placeholder='Username...'
              className='userInputBox'
            />
            {/*<label htmlFor="password">Password:</label>*/}
            <input
              type="password"
              id='password'
              name='password'
              onChange={this.handleChange}
              placeholder='Password...'
              className='userInputBox'
            />
            <button className='submitButton' type='submit'>
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;