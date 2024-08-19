import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login'
import Homepage from './Homepage'



function App() {
  return (
    <div className="App">
        <Router>
        <Routes>f
        <Route path="/" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Homepage" element={<Homepage/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
