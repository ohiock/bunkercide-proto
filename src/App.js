import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem, Thumbnail } from 'react-bootstrap';
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
          <Row>
            <Col xs={6}>
              <Thumbnail src="http://via.placeholder.com/250x250" alt="250x250" className="text-left">
                <h3>Item 1</h3>
                <p>This is item 1's description. Look how great it is!</p>
              </Thumbnail>
            </Col>
            <Col xs={6}>
              <Thumbnail src="http://via.placeholder.com/250x250" alt="250x250" className="text-left">
                <h3>Item 1</h3>
                <p>This is item 1's description. Look how great it is!</p>
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Thumbnail src="http://via.placeholder.com/250x250" alt="250x250" className="text-left">
                <h3>Item 1</h3>
                <p>This is item 1's description. Look how great it is!</p>
              </Thumbnail>
            </Col>
            <Col xs={6}>
              <Thumbnail src="http://via.placeholder.com/250x250" alt="250x250" className="text-left">
                <h3>Item 1</h3>
                <p>This is item 1's description. Look how great it is!</p>
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Thumbnail src="http://via.placeholder.com/250x250" alt="250x250" className="text-left">
                <h3>Item 1</h3>
                <p>This is item 1's description. Look how great it is!</p>
              </Thumbnail>
            </Col>
            <Col xs={6}>
              <Thumbnail src="http://via.placeholder.com/250x250" alt="250x250" className="text-left">
                <h3>Item 1</h3>
                <p>This is item 1's description. Look how great it is!</p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
