import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Welcome from './components/welcome';
import Dash from './components/dash';
import Map from './components/map';
import About from './components/about';
import Choose from './components/choose';
import Hotel from './components/hotel';
import Package from './components/package';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}></Route>
          <Route path='/dash' element={<Dash/>}></Route>
          <Route path='/map' element={<Map/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/choose' element={<Choose/>}></Route>
          <Route path='/hotel' element={<Hotel/>}></Route>
          <Route path='/package' element={<Package/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
