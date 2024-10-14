// Register.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Register = () => {
  return (
    <Container>
      <h2>Complete Registration</h2>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Complete Registration
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
