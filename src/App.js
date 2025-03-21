import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Welcome from './components/welcome';
import Dash from './components/dash';
import Map from './components/map';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}></Route>
          <Route path='/dash' element={<Dash/>}></Route>
          <Route path='/map' element={<Map/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
