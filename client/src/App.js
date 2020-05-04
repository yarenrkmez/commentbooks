

import React, { Component } from 'react'
import AppNavbar from './components/AppNavbar';
import Register from './components/register';
import ItemModal from './components/ItemModal'
import Books from './components/books'
import {Provider} from 'react-redux';

import store from './store';
import { Form ,Container} from 'reactstrap';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar> </AppNavbar>
        <Container>
        
     <Books></Books>
      <Register></Register>
      </Container>
      </div>
      </Provider>
    )
  }
}


export default App;
