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
import Bahan from './components/Bahan';
import AddBahan from './components/AddBahan';


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
          <Route path='/AddRecipe' component={Recipe} />
          <Route path='/AddBahan' component={AddBahan} />
          <Route path='/report' exact><Report/></Route>
          <Route path='/detail/:id' component={Detail} />
          <Route path='/Edit/:id' exact><Edit/></Route>

        </Fragment>
          
          </Switch>
      </Router>
    </>
  );
}

export default App;
