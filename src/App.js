import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home'
import Recipe from './Pages/Recipe'
import Report from './Pages/Report'
import Cards from './components/Cards';
import Login from './Pages/Login';
import Detail from './Pages/Detail';
import Auth from './Auth';
import Test from './components/Test'
import Util from './util/Util'
import { Fragment } from 'react';
import Edit from './Pages/Edit';
import Signup from './Pages/Signup'


// Pindahin Navbar nya nanti perpage aja rendernya
function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Fragment>
        <Navbar /> 
        
       
          <Route path='/' exact component={Home} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/report' component={Report} />
          <Route path='/detail/:id' component={Detail} />
          <Route path='/edit/:id' component={Edit} />

        </Fragment>
          
          </Switch>
      </Router>
    </>
  );
}

export default App;
