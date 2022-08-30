import './App.css';
import Admin from './pages/Admin';
import Find from './pages/Find';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find" element={<Find />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/:page" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
