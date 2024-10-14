// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap'; // Import necessary Bootstrap components

// const EmployeeRegister = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/register', { email, password });
//       setSuccessMessage(response.data.message || 'Registration completed successfully');
//       setEmail('');
//       setPassword('');
//       setErrorMessage(''); // Clear error message if registration is successful
//     } catch (error) {
//       if (error.response && error.response.data.error) {
//         setErrorMessage(error.response.data.error);
//         setSuccessMessage(''); // Clear success message if there's an error
//       }
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col xs={12} sm={8} md={4} lg={4}> {/* Set maximum width of the form */}
//           <h2 
//             className="text-center" 
//             style={{ whiteSpace: 'nowrap' }} // Prevents text from wrapping to the next line
//           >
//             Complete Registration
//           </h2>
//           {successMessage && <Alert variant="success">{successMessage}</Alert>}
//           {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword" className="mt-3">
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-3 w-100">
//               Complete Registration
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default EmployeeRegister;
