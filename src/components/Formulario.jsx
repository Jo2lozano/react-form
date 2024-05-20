import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Formulario.css";

export const Formulario = ({ setUser }) => {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre === "" || contraseña === "") {
      setError(true);
    } else {
      setError(false);
      const user = { nombre, contraseña };
      console.log("Inicio de sesión:", user);
      setUser(user);
      navigate("/perfil");
    }
  };

  const handleRegistro = () => {
    navigate("/registro");
  };

  return (
    <section>
      <h1>CaRtera MR</h1>
      <form className="Formulario" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Ingrese nombre..."
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Ingrese contraseña..."
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        {error && <p className="error">Por favor complete todos los campos.</p>}
        <button type="submit">Inicio de sesión</button>
        <button type="button" onClick={handleRegistro}>Registro</button>
      </form>
    </section>
  );
};

export default Formulario;
