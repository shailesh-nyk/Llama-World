import React, { Component } from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link } from 'react-router-dom';
import logo from './assets/logo.png';

class NavBarComponent extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand as={Link} to="/home" > <img style={{height: "40px"}} src={logo}/>Llama World</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex justify-content-around w-100" onClick={(e) => this.changeActiveNav(e)}>
                        <Nav.Link  className="link-active" as={Link} to="/home">HOME</Nav.Link>
                        <Nav.Link  as={Link} to="/about">INFO</Nav.Link>
                        <Nav.Link  as={Link} to="/find" >WHERE TO FIND THEM?</Nav.Link>
                        <Nav.Link  as={Link} to="/trending">#TRENDING</Nav.Link>
                        <Nav.Link  as={Link} to="/quiz">QUIZ???</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
    changeActiveNav(e) {
        let element = e.target;
        if(element.className.includes('nav-link')) {
            window.$(".link-active").removeClass("link-active");
            element.classList.add('link-active');
        }
    }
}

export default NavBarComponent