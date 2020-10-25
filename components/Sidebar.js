import React, { Component } from "react";
import * as ROUTES from "../constants/routes";
import "./Styles/Sidebar.css";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <body>
        <div class="sidebar">
          <h3 class="logo">
            <img
              src={require("../assets/logo.png")}
              id="logoImage"
              alt="logo"
            ></img>
          </h3>

          <a href={ROUTES.DASHBOARD} class="redirect">
            <img
              src={require("../assets/Dashboard.png")}
              id="dashboard"
              className="image"
              alt="Dashboard"
            ></img>
          </a>
          <a href={ROUTES.FRIENDS} class="redirect">
            <img
              src={require("../assets/Friends.png")}
              className="image"
              alt="Friends"
            ></img>
          </a>
          <a href={ROUTES.ASSESSMENT} class="redirect">
            <img
              id="assessment"
              src={require("../assets/Assessment.png")}
              className="image"
              alt="Assessment"
            ></img>
          </a>
        </div>
      </body>
    );
  }
}

const WrappedSidebar = withRouter(Sidebar);

export default WrappedSidebar;
