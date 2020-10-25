import React, { Component } from "react";
import * as ROUTES from "../constants/routes";
import { AuthUserContext } from "./Session";
import { compose } from "recompose";
import { withFirebase } from "./Firebase";
import { db, firebase } from "./Firebase/firebase";
import "./Styles/Account.css";
import "./Styles/Friends.css";
import { withRouter, Link } from "react-router-dom";
import withBase from "./withBase";
import Sidebar from "./Sidebar";

import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const INITIAL_STATE = {
  name: "",
  address: "",
  email: "",
  contactNum: "",
  relationship: ""
};

class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      setOpen: false,
      setOpen1: false,
      show: false,
      show1: false,
      display: "",
      ...INITIAL_STATE
    };
  }

  onSubmit = event => {
    const { name, address, email, contactNum, relationship } = this.state;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        db.collection("Users")
          .doc(user.uid)
          .collection("Friends")
          .doc(name)
          .set({
            name: name,
            address: address,
            email: email,
            contactNum: contactNum,
            relationship: relationship
          });
      }
    });

    const proc = new Promise(resolve => {
      setTimeout(() => resolve(), 1500);
    });
    proc.then(() => window.location.reload());

    event.preventDefault();
  };

  onSubmit1 = event => {
    const { friendName } = this.state;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        db.collection("Users")
          .doc(user.uid)
          .collection("Friends")
          .doc(friendName)
          .delete();
      }
    });

    const proc = new Promise(resolve => {
      setTimeout(() => resolve(), 1500);
    });
    proc.then(() => window.location.reload());

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({ display: user.displayName });

        db.collection("Users")
          .doc(user.uid)
          .collection("Friends")
          .get()
          .then(querySnapshot => {
            this.setState({
              friends: querySnapshot.docs.map(doc => doc.data())
            });
          });
      } else {
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }

  render() {
    const { name, address, email, contactNum, relationship } = this.state;

    const handleClickOpen = () => {
      this.setState({ setOpen: true });
    };

    const handleClose = () => {
      this.setState({ setOpen: false });
    };

    //for delete modal
    const handleClickOpen1 = friendName => {
      this.setState({ setOpen1: true, friendName: friendName });
    };

    const handleClose1 = () => {
      this.setState({ setOpen1: false });
    };

    const listFriends = this.state.friends.map(friend => (
      <div id="friend" className="friendContainer" style={{ marginLeft: "3%" }}>
        <div className="friendInfo">
          <div className="emergencyContactDetails">
            <p id="emergencyContactName" className="infoDetail">
              {friend.name}
            </p>
            <p id="emergencyContactAddress" className="infoDetail">
              {friend.address}
            </p>
          </div>
          <p id="emailInfo" className="infoDetail">
            {friend.email}
          </p>
          <p id="contactInfo" className="infoDetail">
            {friend.contactNum}
          </p>
          <p id="relationInfo" className="infoDetail">
            {friend.relationship}
          </p>
          <Button
            className="deleteContact"
            variant="contained"
            startIcon={<DeleteForeverIcon />}
            color="primary"
            onClick={() => handleClickOpen1(friend.name)}
          ></Button>
        </div>
      </div>
    ));

    return (
      <div id="friendsPage">
        <Sidebar />
        <div className="flexNav">
          <p id="currentPage">Friends</p>
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
        <body id="body">
          <Button
            className="addContact"
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Add Contact
          </Button>
          <div className="headerField">
            <p id="emergencyContactHeader" className="infoHeader">
              Emergency Contact
            </p>
            <p id="emailHeader" className="infoHeader">
              Email
            </p>
            <p id="contactHeader" className="infoHeader">
              Contact Number
            </p>
            <p id="relationHeader" className="infoHeader">
              Relationship
            </p>
          </div>
          {listFriends}
        </body>
        <Dialog
          open={this.state.setOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Add Contact"}</DialogTitle>
          <form onSubmit={this.onSubmit}>
            <DialogContent>
              {/* <DialogContentText id="alert-dialog-description"></DialogContentText> */}

              <TextField
                value={name}
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                type="text"
                fullWidth
                onChange={this.onChange}
              />
              <TextField
                value={address}
                autoFocus
                margin="dense"
                name="address"
                label="Address"
                type="text"
                fullWidth
                onChange={this.onChange}
              />
              <TextField
                value={email}
                autoFocus
                margin="dense"
                name="email"
                label="Email"
                type="text"
                fullWidth
                onChange={this.onChange}
              />
              <TextField
                value={contactNum}
                autoFocus
                margin="dense"
                name="contactNum"
                label="Contact Number"
                type="text"
                fullWidth
                onChange={this.onChange}
              />
              <TextField
                value={relationship}
                autoFocus
                margin="dense"
                name="relationship"
                label="Relationship"
                type="text"
                fullWidth
                onChange={this.onChange}
              />
            </DialogContent>
            <DialogActions>
              <Button type="submit" color="primary" autoFocus>
                Add
              </Button>
            </DialogActions>
          </form>
        </Dialog>
        <Dialog
          open={this.state.setOpen1}
          onClose={handleClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Contact"}</DialogTitle>
          <form onSubmit={this.onSubmit1}>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Delete {this.state.friendName} from contacts?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button type="submit" color="primary" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

const WrappedFriends = compose(withBase, withRouter, withFirebase)(Friends);

export default WrappedFriends;
