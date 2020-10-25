import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import Sidebar from "react-sidebar";

import Dashboard from "./Dashboard";
import Settings from "./Settings";
import SidebarPage, { sidebarShow } from "./Sidebar";
import Account from "./Account";
import Friends from "./Friends";
import Assessment from "./Assessment";
import Login from "./Login";
import { AuthUserContext } from "./Session";

import { withAuthentication } from "./Session";
import getTweet from '../components/Backend/GetTweet'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      componentShow: true,
      show: true,
      tweets : getTweet()
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.DASHBOARD} component={()=><Dashboard/>} />
          <Route path={ROUTES.FRIENDS} component={Friends} />
          <Route path={ROUTES.ASSESSMENT} component={Assessment} />
        </Router>
      </div>
    );
  }
}

export default withAuthentication(App);
