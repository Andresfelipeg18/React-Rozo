import { useState } from "react";
import "./Formulario.css";

export const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    usuario: "",
    correo: "",
    telefono: "",
    id: "",
  });
  const [personas, setPersonas] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPersonas([...personas, formData]);

    setFormData({
      nombre: "",
      usuario: "",
      correo: "",
      telefono: "",
      id: "",
    });
  };

  return (
    <div className="registro">
      <h1 className="title2">Registro de Persona</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="container6">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn3" type="submit">
          Registrar
        </button>
      </form>
      <h2>Personas Registradas</h2>
      <ul>
        {personas.map((persona, index) => (
          <li key={index}>
            {persona.nombre} - {persona.usuario} - {persona.correo} -{" "}
            {persona.telefono} - {persona.id}
          </li>
        ))}
      </ul>
    </div>
  );
};
