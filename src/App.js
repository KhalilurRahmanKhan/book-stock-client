import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
