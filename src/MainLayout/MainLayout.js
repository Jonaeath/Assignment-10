import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../Component/Shared/LeftSideNav/LeftSideNav';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Shared/Header/Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg = '4'>
                    <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col  lg = '8'>
                    <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainLayout;