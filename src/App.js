import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Report from './pages/Report'
import Cards from './components/Cards';
import Login from './pages/Login';
import Auth from './Auth';

// Pindahin Navbar nya nanti perpage aja rendernya
function App() {
  return (
    <>
      <Router>
        <Navbar /> 
          
          <Switch>
         
          <Route path='/' exact component={Home} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/report' component={Report} />
          <Route path='/login' exact component={Login} />
          
          </Switch>
      </Router>
    </>
  );
}

export default App;
