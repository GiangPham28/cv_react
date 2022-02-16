import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
  </Router>
  )
}

export default App;
