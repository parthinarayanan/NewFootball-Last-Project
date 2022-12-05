import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";



class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      //userId: '',
     // regid:"",
      regemail: "",
      regMobileNumber: "",
      regPassword:"",
      regPlayerName: "",
      regcountry: "",
      regRoll: "",
      regPlayerAge: "",
    };

    if (props.user.userId) {
      this.state = props.user;
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.userId) {
      pageTitle = <h2>Edit User</h2>;
      actionStatus = <b>Update</b>;
    } else {
      pageTitle = <h2 id="Ap">Add Player</h2>;
      actionStatus = <b id="savebtn">Save </b>
    }

    return (
      <div class="a1">
        <div id="Totel">
       
        <h2> {pageTitle}</h2>
        <Row>
          <Col sm={2}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="regemail">
                <Form.Label id="f11">Email</Form.Label>
                <Form.Control
                  type="text"
                  name="regemail"
                  id="em1"
                 
                  data-testid="regemail"
                  value={this.state.regemail}
                  onChange={this.handleChange}
                  placeholder="email"
                />
              </Form.Group>
              <Form.Group controlId="regMobileNumber">
                <Form.Label id="num1">mobileNumber</Form.Label>
                <Form.Control
                  type="text"
                  name="regMobileNumber"
                  id="mob1"
                  data-testid="RegmobileNumber"
                  value={this.state.regMobileNumber}
                  onChange={this.handleChange}
                  placeholder="mobileNumber"
                />
              </Form.Group>
              <Form.Group controlId="regPassword">
                <Form.Label id="f22">password</Form.Label>
                <Form.Control
                  type="text"
                  name="regPassword"
                  id="pas1"
                  data-testid="password"
                  value={this.state.regPassword}
                  onChange={this.handleChange}
                  placeholder="password"
                />
              </Form.Group>
              <Form.Group controlId="regPlayerName">
                <Form.Label id="nam">playerName</Form.Label>
                <Form.Control
                  type="text"
                  name="regPlayerName"
                  id="ply1"
                  data-testid="RegplayerName"
                  value={this.state.regPlayerName}
                  onChange={this.handleChange}
                  placeholder="playerName"
                />
              </Form.Group>
              <Form.Group controlId="regcountry">
                <Form.Label id="try">country</Form.Label>
                <Form.Control
                  type="text"
                  name="regcountry"
                  id="con1"
                  data-testid="Regcountry"
                  value={this.state.regcountry}
                  onChange={this.handleChange}
                  placeholder="country"
                />
              </Form.Group>

              <Form.Group controlId="regRoll">
                <Form.Label id="ll">roll</Form.Label>
                <Form.Control
                  type="text"
                  name="regRoll"
                  id="text1"
                  data-testid="Regroll"
                  value={this.state.regRoll}
                  onChange={this.handleChange}
                  placeholder="roll"
                />

                
              </Form.Group>
              <Form.Group controlId="regPlayerAge">
                <Form.Label id="yar">playerAge</Form.Label>
                <Form.Control
                  type="text"
                  name="regPlayerAge"
                  id="age1"
                  data-testid="RegplayerAge"
                  value={this.state.regPlayerAge}
                  onChange={this.handleChange}
                  placeholder="playerAge"
                />

                
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="hidden"
                  name="userId"
                  value={this.state.userId}
                />
                <Button variant="success" type="submit">
                  {actionStatus}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}

export default AddUser;
