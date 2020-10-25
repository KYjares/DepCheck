import React, { Component } from "react";
import * as ROUTES from "../constants/routes";
import { AuthUserContext } from "./Session";
import { compose } from "recompose";
import { withFirebase } from "./Firebase";
import { db, firebase } from "./Firebase/firebase";
import "./Styles/Account.css";
import { withRouter, Link } from "react-router-dom";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: ""
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({ display: user.displayName });
      } else {
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }

  render() {
    let text,
      componentShow,
      { location } = this.props;

    switch (location.pathname) {
      case ROUTES.DASHBOARD: {
        text = "Dashboard";
        break;
      }
      case ROUTES.FRIENDS: {
        text = "Friends";
        break;
      }
      case ROUTES.LOGIN: {
        componentShow = true;
        break;
      }
    }

    return (
      <div>
        {componentShow ? (
          <div></div>
        ) : (
          <div className="flexNav">
            <p id="currentPage">{text}</p>
            <p id="user">
              <b>Logged in as {this.state.display}</b>
            </p>
            <p id="logout">
              <b>
                <Link to={ROUTES.LOGIN} onClick={firebase.doSignOut}>
                  Logout
                </Link>
              </b>
            </p>
          </div>
        )}
      </div>
    );
  }
}

const WrappedAccount = compose(withRouter, withFirebase)(Account);

export default WrappedAccount;
