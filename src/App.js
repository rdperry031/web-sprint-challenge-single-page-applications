import React, { useState, useEffect} from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import Home from './Home'
import schema from './validation/formSchema'
import { reach } from 'yup'
import axios from "axios";

const initialFormValues = {
  name: '',
  size: '',
  special: '',
  pepperoni: false,
  gabagool: false,
  grilledChicken: false,
  canadianBacon: false,
  bacon: false,
  onion: false,
  greenPepper: false,
  jalapenos: false,
  pineapple: false,
  olives: false,
  mushrooms: false
}

const initialFormErrors = {
  name:'',
  size:''
}
const initialOrders=[]
//Sets submit button to be disabled upon initialization. 
const initialDisabled= true

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [orders, setOrders] = useState(initialOrders)

  const orderPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(res => {
        setOrders(res.data, ...orders)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }
  
  const validate = (name, value) => {
    reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
    
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      pepperoni: formValues.pepperoni,
      gabagool: formValues.gabagool,
      grilledChicken: formValues.grilledChicken,
      canadianBacon: formValues.canadianBacon,
      bacon: formValues.bacon,
      onion: formValues.onion,
      greenPepper: formValues.greenPepper,
      jalapenos: formValues.jalapenos,
      pineapple: formValues.pineapple,
      olives: formValues.olives,
      mushrooms: formValues.mushrooms,
    }
    orderPizza(newOrder)
  }
//Sets submit button to be enabled when all required forms have been filled out
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  })

  return (
    <>
     <h1>Lambda Eats</h1> 
      <Link to='/'>Home</Link>
      <Switch>
        <Route path='/pizza'>
          <PizzaForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
