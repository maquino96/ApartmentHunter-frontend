import React from "react";
import { Form } from "semantic-ui-react";

const LoginForm = () => {

    return(
    <div>
        <Form onSubmit={() => {
            console.log("submitting form...");
        }}>   
            <Form.Group widths="equal">
                <Form.Input fluid label="Name" placeholder="Name" name="name"/>
                <Form.Input fluid label="Password" placeholder="Enter password" name="hp"/>
            </Form.Group>
            <Form.Button>Submit</Form.Button>
        </Form>

    </div>
    )
}

export default LoginForm;