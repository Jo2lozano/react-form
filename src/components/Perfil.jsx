import React from 'react';

export const Perfil = ({ user, handleLogout }) => {
  if (!user) {
    return (
      <div>
        <h1>Perfil del Usuario</h1>
        <p>No hay datos de usuario. Por favor, inicie sesión.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <p>Bienvenido, {user.nombre}.</p>
      <p>Contraseña: {user.contraseña}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Perfil;
