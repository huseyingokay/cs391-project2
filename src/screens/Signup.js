import React from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import formEnter from "../helpers/formEnter";
import signUp from "../helpers/signUp";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailValidation: "",
            password: "",
            passwordValidation: "",
            userName: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }
                       
    forms() {
        let userNameForm = formEnter("User Name", this.state.userName, "text", "Enter user name", this.handleSubmit);
        let EmailForm = formEnter("User Email", this.state.email, "email", "Enter email", this.handleSubmit);
        let EmailValidationForm = formEnter("Email Validation", this.state.emailValidation, "email", "Re-enter email", this.handleSubmit);
        let passwordForm = formEnter("User Password", this.state.password, "password", "Enter Password", this.handleSubmit);
        let passwordValidationForm = formEnter("Password Validation", this.state.passwordValidation, "password", "Re-enter password", this.handleSubmit);
        return (
            <Form action="/" method="" onSubmit={(e) => signUp(e, this.state)}>
                {userNameForm}
                {EmailForm}
                {EmailValidationForm}
                {passwordForm}
                {passwordValidationForm}

                <Button variant="warning" type="submit" style={{marginRight:"2%"}}>
                    Signup
                </Button>

                <Button variant="warning" type="submit">
                    Go to Login
                </Button>

            </Form>
        );
    };

    render() {
        return (
            <Container fluid style={{ marginTop: "5%" }}>
                <Row className="justify-content-center">
                    <Col xs="auto" md="auto">
                        {this.forms()}
                    </Col>
                </Row>
                <br></br>
        <br></br>
        <br></br>
            </Container>
        );
    }
}

export default Signup;