import React from 'react';
import './App.css';
import {Note} from './Pages/Note';
import {Show} from './Pages/Show';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
           <Route exact path='/'>
              <Note/>
           </Route>

           <Route path='/:id'>
              <Show/>
           </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
