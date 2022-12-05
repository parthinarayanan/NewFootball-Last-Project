import React, { Component } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardGroup, Col, Container, Form,Input, InputGroup, Row } from 'reactstrap';  
class Login extends Component {  
    constructor() {  
        super();  
  
        this.state = {  
            email: '',  
            password: '',
            
              
        }  
  
        this.password = this.password.bind(this);  
        this.email = this.email.bind(this);  
        this.Login = this.Login.bind(this);  
    }  
  
    email(event) {  
        this.setState({ email: event.target.value })  
    }  
    password(event) {  
        this.setState({ password: event.target.value })  
    }  
    
    Login() {  
       // debugger;  
        
        //fetch("https://localhost:7256/api/Welcome/Login", {  
          fetch( 'https://localhost:7286/api/Football/Login', { 
            method:'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                email: this.state.email,  
                password: this.state.password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status === 'Invalid')  
                    alert('Invalid User');  
                else  
                    this.props.history.push("/Dashboard");  
            })  
           
    }  
   
      
    
  
    render() {  
  
        return (  
            
            
            <div className="app flex-row align-items-center">  
             <div id="full">
            <div id='bo'>
           
                <Container>  
                    <Row className="justify-content-center">  
                        <Col md="9" lg="7" xl="6">  
  
                            <CardGroup>  
                                <Card className="p-2">  
                                    <CardBody>  
                                        <Form className='Login'>  
                                            
                                                <div id="page"href="./Register" className="a3">  
                                                   Page are used to Admin 
                                            
                                            </div>  
                                            <br/>
                                            <InputGroup className="mb-3">  
  
                                                <Input id='a1' type="text" onChange={this.email} placeholder="Enter Email" />  
                                            </InputGroup>  

                                            <br/>
                                            
                                            <InputGroup className="mb-4">  
  
                                                <Input id='a2' type="password" onChange={this.password} placeholder="Enter Password" />  
                                            </InputGroup>  
                                            <br/>
                                            <Button id='bt' onClick={this.Login} color="success" block><Link to="/Login">Login</Link></Button>
                                            
                                            
                                             

                                        </Form>  
                                    </CardBody>  
                                </Card>  
                            </CardGroup>  
                        </Col>  
                    </Row>  
                </Container>  
            </div>  
            </div>
            </div>
        );  
    }  
}  
  
export default Login;