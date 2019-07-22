import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Switch } from 'react-router-dom';


const App = () => (
  <div>
    <Navigation />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route pant="/contact" component={Contact} />
    </Switch>
  </div>
  
);

export default App;
