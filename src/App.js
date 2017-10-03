import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={12}>
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>Bunkercide</Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavItem>Home</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Contact</NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
