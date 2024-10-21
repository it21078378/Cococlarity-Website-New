import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

const Layout = ({ title, left, right }) => {
    return (
        <Container className='d-flex w-100 flex-column justify-content-center' >
            <Row className="text-start">
                <h1>
                    <Badge bg="secondary">{title}</Badge>
                </h1>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row' }}>
                {left && right ? (
                    <>
                        <Col className="text-justify">
                            {left}
                        </Col>
                        <Col className="text-justify">
                            {right}
                        </Col>
                    </>
                ) : (
                    <Col className="text-justify">
                        {left || right}
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default Layout;
