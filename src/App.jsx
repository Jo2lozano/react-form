import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Formulario } from './components/Formulario';
import { Perfil } from './components/Perfil';
import { Registro } from './components/Registro';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const navigateRef = useRef();

  const handleLogout = () => {
    setUser(null);
    navigateRef.current('/');
  };

  const NavigateWrapper = () => {
    navigateRef.current = useNavigate();
    return null;
  };

  return (
    <Router>
      <NavigateWrapper />
      <div className='App'>
        <Routes>
          <Route path="/" element={<Formulario setUser={setUser} />} />
          <Route path="/perfil" element={<Perfil user={user} handleLogout={handleLogout} />} />
          <Route path="/registro" element={<Registro setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
