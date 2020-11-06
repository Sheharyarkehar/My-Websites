import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import {Switch,Route,Redirect} from 'react-router-dom'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Switch>
<Route exact path='/' component={Home}/> 
<Route exact path='/about' component={About}/> 
<Route exact path='/services' component={Service}/> 
<Route exact path='/contact' component={Contact}/> 
<Redirect to='/'/>
     </Switch>
    </div>
  );
}

export default App;
