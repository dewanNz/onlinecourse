//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import data from './components/FakeData/fakeData.json';
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button  } from 'react-bootstrap';


function App() {
  
  const [courses, setCourses]=useState([]);
  //console.log(courses); 
   const [cart, setCart] = useState([]);
   useEffect(()=> {
    setCourses(data);
     
   },[])
   
   const handleAddCourses = (course) => {
     const newCart= [...cart, course];
     setCart(newCart);
   }
  return (
    <div>
      <Navbar bg="primary" variant="dark" sticky="top">
          <Navbar.Brand href="#home">Online Course Platform</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
          {
              courses.map(course=> <Course  course={course} key={course.id} handleAddCourses={handleAddCourses} ></Course> )
          }
          </Col>
          <Col xs={6} md={4}>
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
     </div>
  );
}

export default App;
