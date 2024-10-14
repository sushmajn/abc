import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

const Home = () => {
  const [activeForm, setActiveForm] = useState('login'); // Tracks active form ('login' or 'register')
  const [activeLink, setActiveLink] = useState('home'); // Tracks which nav link is active
  const [showMessage, setShowMessage] = useState(false); // Tracks if login message should be shown

  // Inline style for underlining the active link
  const activeStyle = {
    textDecoration: 'underline',
  };

  const handleProtectedLinkClick = (link) => {
    setActiveForm('login'); // Always show login form
    setActiveLink(link); // Set the active link
    setShowMessage(true); // Show the "Please login" message
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/home">Monitoring Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  setActiveForm('login');
                  setActiveLink('home'); // Set active link to Home
                  setShowMessage(false); // Hide the login message
                }}
                style={activeLink === 'home' ? activeStyle : undefined}
              >
                Home
              </Nav.Link>
              {/* These links will show the login form with a message */}
              <Nav.Link
                onClick={() => handleProtectedLinkClick('production')}
                style={activeLink === 'production' ? activeStyle : undefined}
              >
                Production
              </Nav.Link>
              <Nav.Link
                onClick={() => handleProtectedLinkClick('machines')}
                style={activeLink === 'machines' ? activeStyle : undefined}
              >
                Machines
              </Nav.Link>
              <Nav.Link
                onClick={() => handleProtectedLinkClick('environment')}
                style={activeLink === 'environment' ? activeStyle : undefined}
              >
                Environment
              </Nav.Link>
              <Nav.Link
                onClick={() => handleProtectedLinkClick('quality')}
                style={activeLink === 'quality' ? activeStyle : undefined}
              >
                Quality
              </Nav.Link>
            </Nav>

            {/* Register Link Only */}
            <Nav>
              <Nav.Link
                onClick={() => {
                  setActiveForm('register');
                  setActiveLink('register'); // Set active link to Register
                  setShowMessage(false); // Hide the login message
                }}
                style={activeForm === 'register' ? activeStyle : undefined}
              >
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h2>Welcome to the Monitoring Dashboard</h2>
          </Col>
        </Row>

        <Row className="mt-4 justify-content-center">
          <Col md={10} lg={10}>
            {/* Show the "Please log in" message if necessary */}
            {showMessage && (
              <p className="text-danger">Please log in to access this page.</p>
            )}

            {/* Conditionally render the Login or Register component */}
            {activeForm === 'login' ? <Login /> : <Register />}
          </Col>
        </Row>
      </Container>

      <footer className="mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Monitoring Dashboard. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
