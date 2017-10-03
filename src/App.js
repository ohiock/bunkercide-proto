import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={8}>Hello</Col>
            <Col xs={4}>There</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
