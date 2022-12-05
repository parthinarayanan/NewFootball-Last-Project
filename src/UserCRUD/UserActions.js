import React, { Component } from "react";
import "./UserAction.css";

import { Container, Button } from "react-bootstrap";
import UserList from "./GetUser";
//import AddUser from "./AddUser";
import axios from "axios";
import { Link } from "react-router-dom";
//import Login from "./Login";
import AddUser from "./AddUser";

const apiUrl = "https://localhost:7286/api/Football";

class UserActionApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddUser: false,
      error: null,
      response: {},
      userData: {},
      isEdituser: false,
      isUserDetails: true,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isAddUser: true });
    this.setState({ isUserDetails: false });
  }
  onDetails() {
    this.setState({ isUserDetails: true });
    this.setState({ isAddUser: false });
  }

  onFormSubmit(data) {
    this.setState({ isAddUser: true });
    this.setState({ isUserDetails: false });
    if (this.state.isEdituser) {
      axios.put(apiUrl + "/UpdateEmployeeDetails", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isAddUser: false,
          isEdituser: false,
        });
      });
    } else {
      axios.post(apiUrl + "/InsertFoodball", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isAddUser: false,
          isEdituser: false,
        });
      });
    }
  }

  editUser = (userId) => {
    this.setState({ isUserDetails: false });
    axios.get(apiUrl + "/GetUserDetailsById/" + userId).then(
      (result) => {
        this.setState({
          isEdituser: true,
          isAddUser: true,
          userData: result.data,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
  };

  render() {
    let userForm;
    if (this.state.isAddUser || this.state.isEditUser) {
      userForm = (
        <AddUser
          data-testid="adduser"
          onFormSubmit={this.onFormSubmit}
          user={this.state.userData}
        />
      );
    }
    return (
      <div className="App">
<button id="logout"><Link to="/" className="logbtn" >Logout</Link></button>


        <Container>
          <h1  id="sys"class="f" style={{ textAlign: "center" }}>Football Management System</h1>
          <hr></hr>
          {!this.state.isUserDetails && (
            <Button id="bu1" variant="primary" onClick={() => this.onDetails()}>
              {" "}
              User Details
            </Button>
          )}
          {!this.state.isAddUser && (
            <Button id="Add" variant="primary" onClick={() => this.onCreate()}>
              Add 
            </Button>
          )}
          <br></br>
          {!this.state.isAddUser && (
            <UserList data-testid="userlist" editUser={this.editUser} />
          )}
          {userForm}
        </Container>
      </div>
    );
  }

}
export default UserActionApp;
