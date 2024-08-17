import { useState } from "react";
import "./Tarea.css";

export const Tarea = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTareas([...tareas, { nombre, descripcion }]);

    setNombre("");
    setDescripcion("");
  };

  return (
    <div className="tareas">
      <h1>Agregar Tarea</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la Tarea:</label>
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Nombre de la tarea"
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={handleDescripcionChange}
            placeholder="Descripción de la tarea"
            required
          />
        </div>
        <button type="submit">Agregar Tarea</button>
      </form>
      <h2 className="title5">*Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <strong>{tarea.nombre}:</strong> {tarea.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};
