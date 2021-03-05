import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './Components/Nav/Navigation';
import Home from './Components/Home/Home';
import './App.css';


function App() {
  return (
   <Router>
      <div className="App">
      
       <Navigation />
         <Switch>
          
            <Route path='/' exact component={Home} />
           {/*  <Route path='/shop'  exact render={(props) => (<Shop {...props} addItem={addItem} />)} />
            <Route path='/about' exact component={About} />
            <Route path='/shop/:id' render={(props) => (<Beer {...props} addItem={addItem} />)} />
            <Route path='/cart' exact render={(props) => (<Cart {...props} beers={beers} />)} /> */}
          
        </Switch>
        
        </div>
        {/* <Footer itemNb={itemNb} clearCart={clearCart} /> */}
    </Router>
  );
}

export default App;
