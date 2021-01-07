import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Login from './Login';
import Drawer from './Drawer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Inventory from './Components/Inventory';
import Dashboard from './Components/Dashboard';
import Customer from './Components/Customer';
import Report from './Components/Report';
import Transaction from './Components/Transaction';
import Postman from "./postman";



const Main = () => {
  return (
    <Router>
      <Switch>
      <Route path='/test' exact component={Postman} />
      <Route path='/' exact component={Login} />
      <Route path='/drawer' component={Drawer} />
      <Route path='/inventory' component={Inventory} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/transaction' component={Transaction} />
      <Route path='/customer' component={Customer} />
      <Route path='/report' component={Report} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));