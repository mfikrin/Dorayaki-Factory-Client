import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/recipe' component={Services} />
          <Route path='/report' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
