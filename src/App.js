import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import home from './Pages/Home'
import recipe from './Pages/Recipe'
import report from './Pages/Report'



function App() {
  return (
    <>
      <Router>
        <Navbar />

          <Routes>
        
          <Route path='/' exact component={home} />
          <Route path='/recipe' component={recipe} />
          <Route path='/report' component={report} />
          
          </Routes>
        
      </Router>
    </>
  );
}

export default App;
