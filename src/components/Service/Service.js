import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { title, description, price, img } = props.service
    return (
        <div>
            <Col>
                <Card border="secondary">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Title: {title}</Card.Title>
                        <Card.Text>
                            Description: {description}
                        </Card.Text>
                        <Card.Text>Price: {price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;