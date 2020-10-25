import React from "react";
import ManBike from "./Animations/ManBike";
import "./Styles/Login.css";

export default WrappedComponent =>
  class extends React.Component {
    state = {
      isLoading: true
    };

    componentDidMount() {
      this.hideLoader();
    }

    hideLoader = () => {
      // This is for demo purpose
      const proc = new Promise(resolve => {
        setTimeout(() => resolve(), 1500);
      });
      proc.then(() => this.setState({ isLoading: false }));
    };

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <div className="containerLoading">
              <div className="loadingDiv">
                <div className="loadingBox">
                  <ManBike />
                </div>
                <div className="loadingText">Loading</div>
              </div>
            </div>
          ) : (
            <WrappedComponent />
          )}
        </div>
      );
    }
  };
