import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Inventory from './pages/Inventory/Inventory';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="inventory/:id" element={ <RequireAuth><Inventory/></RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
