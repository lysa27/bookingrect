
import './App.css';
import Home from './views/home.js';
import {BrowserRouter as Router} from "react-router-dom";
import  Routes  from './routes';
function App() {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
}

export default App;
