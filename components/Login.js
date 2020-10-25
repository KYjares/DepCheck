import React from "react";
import { Box, Button } from "@material-ui/core";
import Swing from "./Animations/Swing";
import "./Styles/Login.css";
import wave from "../assets/wave.png";
import depCheckLogo from "../assets/logo.png";
import { withFirebase } from "./Firebase";
import { db } from "./Firebase/firebase";
import { withRouter } from "react-router-dom";
import withBase from "./withBase";
import { compose } from "recompose";
import * as ROUTES from "../constants/routes";
import Modal from "./AssessmentModal";

// React Material-ui
import TwitterIcon from "@material-ui/icons/Twitter";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import getTweet from "../components/Backend/GetTweet";

// React Bootstrap
import { ButtonGroup, ToggleButton } from "react-bootstrap";

class LoginBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setOpen: false,
      open: false,
      checked: false,
      setChecked: false,
      radioValue: [],
      show: false,
      tweets: getTweet()
    };
  }

  componentDidMount() {
    console.log(this.state.tweets);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  onSubmit = event => {
    this.props.firebase
      .doSignInWithTwitter()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        db.collection("Users")
          .doc(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            roles: {},
            tweets: this.state.tweets
          });
        this.props.history.push(ROUTES.DASHBOARD, {
          from: this.props.location.pathname,
          state: {
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            tweets: getTweet()
          }
        });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    // const handleClickOpen = () => {
    //   this.setState({ setOpen: true });
    // };

    // const handleClose = () => {
    //   this.setState({ setOpen: false });
    // };

    const radiosOption = [
      { name: "Not at All", value: "0" },
      { name: "Several days", value: "1" },
      { name: "More than half the days", value: "2" },
      { name: "Nearly every day", value: "3" }
    ];

    const questionList = [
      {
        id: 1,
        question: "Slight loss of interest or pleasure in doing things?"
      },
      {
        id: 2,
        question: "Feeling sad, down or hopeless?"
      },
      {
        id: 3,
        question: "Trouble falling or staying asleep, or sleeping too much?"
      },
      {
        id: 4,
        question: "Feeling tired or increased fatigue?"
      },
      {
        id: 5,
        question: "Changes in appetite - poor appetite or overeating?"
      },
      {
        id: 6,
        question:
          "Feeling worthless, guilty or that you are a failure or have let yourself or your family down?"
      },
      {
        id: 7,
        question: "Trouble concentrating or thinking on things?"
      },
      {
        id: 8,
        question:
          "Moving or speaking so slowly that other people could have noticed?"
      },
      {
        id: 9,
        question:
          "Thoughts that you would be better off dead, hurting yourself in some way?"
      },
      {
        id: 10,
        question:
          "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?"
      }
    ];

    const chosenRadioToArrayState = (number, value) => {
      const newIds = this.state.radioValue.slice(); //copy the array
      newIds[number] = value; //execute the manipulations
      this.setState({ radioValue: newIds }); //set the new state
    };

    // const listQuestions = questionList.map(question => (
    //   <div className="alertContent">
    //     <div className="alertText">{question.question}</div>
    //     <div className="alertButton">
    //       <ButtonGroup toggle vertical>
    //         {radiosOption.map((radio, idx) => (
    //           <ToggleButton
    //             className={
    //               this.state.radioValue[1] === radio.value
    //                 ? "checkedButton"
    //                 : "uncheckedButton"
    //             }
    //             key={idx}
    //             type="radio"
    //             variant="secondary"
    //             name="radio"
    //             value={radio.value}
    //             checked={this.state.radioValue[1] === radio.value}
    //             onChange={e => {
    //               chosenRadioToArrayState(1, e.currentTarget.value);
    //             }}
    //           >
    //             {radio.name}
    //           </ToggleButton>
    //         ))}
    //       </ButtonGroup>
    //     </div>
    //   </div>
    // ));

    return (
      <div className="containerLogin">
        <div
          className="loginWaveBackground"
          style={{
            backgroundSize: "contain",
            backgroundImage: `url(${wave})`,
            backgroundRepeat: "no-repeat"
          }}
        ></div>

        <div className="svg">
          <Swing />
        </div>
        <div className="loginDiv">
          <div className="loginBox">
            <div className="modal-input">
              <div className="login-div">
                <img alt="" src={depCheckLogo} className="login-logo" />
              </div>
              <Modal show={this.state.show} handleClose={this.hideModal} />
              <Button
                className="confirm-assessment"
                variant="contained"
                color="primary"
                onClick={this.showModal}
              >
                Provide Assessment
              </Button>
              <div className="textdiv">
                <p className="textOR">OR</p>
              </div>
              <Button
                className="confirm-twitter"
                variant="contained"
                startIcon={<TwitterIcon />}
                color="primary"
                onClick={this.onSubmit}
              >
                Continue with Twitter
              </Button>
            </div>
          </div>
        </div>

        {/* <Dialog
          open={this.state.setOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Mental Health Assessment"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
            {listQuestions}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              ASSESS
            </Button>
          </DialogActions>
        </Dialog> */}

        <Box className="layer-white"></Box>
      </div>
    );
  }
}

const LoginForm = compose(withBase, withRouter, withFirebase)(LoginBase);

export default LoginForm;
