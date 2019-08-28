import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Register extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email:</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleIdentifiant">Identifiant de connexion :</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password:</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password-confirmation"
            id="examplePassword"
            placeholder="confirmation"
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Register;
