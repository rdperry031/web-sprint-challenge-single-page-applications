import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import Home from './Home'
const App = () => {
  return (
    <>
     <h1>Lambda Eats</h1> 
      <Link to='/'>Home</Link>
      <Switch>
        <Route path='/pizza'>
          <PizzaForm/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
