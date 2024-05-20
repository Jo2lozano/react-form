const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.json());
app.use(cors()); // Habilitar CORS si es necesario


// Reemplaza esto con tu cadena de conexión real
const mongoURI = 'http://localhost:8080/User'

// Conectar a la base de datos MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

// Definición del esquema y modelo de usuario
const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  celular: { type: String, required: true },
  documento: { type: String, required: true },
  contraseña: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Ruta para registrar un nuevo usuario
app.post('/register', async (req, res) => {
  const { nombre, apellido, celular, documento, contraseña } = req.body;

  if (!nombre || !apellido || !celular || !documento || !contraseña) {
    return res.status(400).json({ message: 'Por favor complete todos los campos' });
  }

  try {
    // Hashear la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const newUser = new User({
      nombre,
      apellido,
      celular,
      documento,
      contraseña: hashedPassword
    });
    
    // Guardar el nuevo usuario en la base de datos
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
