import React from 'react';
import Todo from './Components/ToDo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './Components/Navigation';
import AllDataDisplay from './Components/AllDataDisplay';

function App() {
  return (
    
   <>
     <Navigation/>
        
          <Switch>
            <Route exact path='/display'><AllDataDisplay/></Route>
            <Route exact path='/add-Todo'><Todo/></Route>

            <Route exact path='/update-Todo/:id'><Todo/></Route>
            <Route exact path='/Todo'><AllDataDisplay/></Route>
          </Switch>

          </>
       
  );
}

export default App;
