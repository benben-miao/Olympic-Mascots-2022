import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/index';
import Cell from './containers/Cell/index';
import Olympic from './containers/Olympic/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={ <Home /> } path="/home" />
          <Route element={ <Cell /> } path="/cell" />
          <Route element={ <Olympic /> } path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
