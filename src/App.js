import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home'
import Recipe from './Pages/Recipe'
import Report from './Pages/Report'
import Cards from './components/Cards';
import Login from './Pages/Login';
import Auth from './Auth';
import { Fragment } from 'react';

// Pindahin Navbar nya nanti perpage aja rendernya
function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Fragment>
        <Navbar /> 
       
          <Route path='/' exact component={Home} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/report' component={Report} />
        </Fragment>
          
          </Switch>
      </Router>
    </>
  );
}

export default App;
