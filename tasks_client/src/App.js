import logo from './logo.svg';
import './App.scss';

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Tasks from './components/tasks/Tasks';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <Tasks/>
        </Container>
      </div>
    );
  }
}

library.add(faCheckCircle, faTrashAlt)

export default App;
