import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Course = (props) => {
    const{title, summary, image, price }=props.course
    const handleAddCourses = props.handleAddCourses;
   
    return (
        <div >
            <Card style={{ width: '38rem', margin:'20px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {summary} </Card.Text>
                    <Card.Text> Price:${price} </Card.Text>
                    <Button variant="warning" onClick={() => handleAddCourses(props.course)} block >Enroll Now</Button>
                </Card.Body>
            </Card>

        </div>
    );

    
};

export default Course;