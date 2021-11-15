import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home'
import Recipe from './Pages/Recipe'
import Report from './Pages/Report'
import Cards from './components/Cards';


function App() {
  return (
    <>
      <Router>
        <Navbar />
          
          <Switch>
         
          <Route path='/' exact component={Home} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/report' component={Report} />
          
          </Switch>
      </Router>
    </>
  );
}

export default App;
