import React, { Component } from 'react';
import './App.css';
import Home from '../reactrouting/src/components/Home';
import About from '../reactrouting/src/components/About';
import Contact from '../reactrouting/src/components/Contact';
import Navbar from '../reactrouting/src/components/Navbar';
import { Route } from 'react-router-dom';

class App extends Component {
  render(){
    return (
        <div className="App">
          <Navbar></Navbar>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/404' render= {() => { return (<p className='center'>Page Not Found</p>)}} />
        </div>
    );
  }
}

export default App;
