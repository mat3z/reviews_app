import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth'

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };


  render() {
    return(
      <nav>
        <div className='navbar'>
          <div className='navbarBrand'>
            <Link to="/">
              HOMEPAGE
            </Link>
          </div>
          {this.props.currentUser.isAuthenticated ?
            (
              <ul className="navbarList">
                <li>
                  <a onClick={this.logout}>LOG OUT</a>
                </li>
              </ul>
            ) :
            (
              <ul className="navbarList">
                <li>
                  <Link to="/signup">SIGN UP</Link>
                </li>
                <li>
                  <Link to="/login">LOG IN</Link>
                </li>
              </ul>
            )
          }
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);