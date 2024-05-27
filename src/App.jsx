import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Verification from './pages/Verification';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
//import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/verify' element={<Verification/>} />
      <Route path='/authenticate' element={<Authentication/>} />
      {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
    </Routes>
  );
}

export default App;