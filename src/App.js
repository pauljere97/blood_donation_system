import './App.scss';
import Admin from './pages/Admin';
import Find from './pages/Find';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import { Context, state_data } from './context/Context';
import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Learn from './pages/Learn';

function App() {
  const [state, setState] = useState(state_data)
  return (
    <Router>
      <Context.Provider value={{ state, setState }}>
        <LoadingScreen />
        <Routes>
          <Route path="/admin/:page" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/find" element={<Find />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Context.Provider>
    </Router>
  );
}

export default App;
