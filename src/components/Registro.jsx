import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

export const Registro = ({ setUser }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [celular, setCelular] = useState('');
  const [documento, setDocumento] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (nombre === '' || apellido === '' || celular === '' || documento === '' || contraseña === '') {
      setError(true);
    } else {
      setError(false);
      try {
        const response = await fetch('http://localhost:8080/User', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, apellido, celular, documento, contraseña }),
        });
        if (!response.ok) {
          throw new Error('Error en el registro');
        }
        const user = await response.json();
        setUser(user);
        navigate('/perfil');
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
      }
    }
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      <p>Por favor, registre una nueva cuenta.</p>
      <form className="Registro" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Número de Celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Número de Documento"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        {error && <p className="error">Por favor complete todos los campos.</p>}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
