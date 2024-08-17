//Realiza un programa que realice las 4 operaciones básicas 
//capturando dos números en inputs y mostrando el resultado 
//en un h2(4 botones: sumar, restar, multiplicar, dividir)
import { useState } from "react";
import "./Calculadora.css"
export const Calculadora = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleChange1 = (e) => {
    setNumero1(e.target.value);
  };

  const handleChange2 = (e) => {
    setNumero2(e.target.value);
  };

  const sumar = () => {
    setResultado(parseFloat(numero1) + parseFloat(numero2));
  };

  const restar = () => {
    setResultado(parseFloat(numero1) - parseFloat(numero2));
  };

  const multiplicar = () => {
    setResultado(parseFloat(numero1) * parseFloat(numero2));
  };

  const dividir = () => {
    if (numero2 !== '0') {
      setResultado(parseFloat(numero1) / parseFloat(numero2));
    } else {
      setResultado('No se puede dividir por 0');
    }
  };

  return (
    <div className="container">
      <article className="container1">
      <input className="input1"
        type="text"
        value={numero1}
        onChange={handleChange1}
        placeholder="Primer número"
      />
      <input className="input1"
        type="text"
        value={numero2}
        onChange={handleChange2}
        placeholder="Segundo número"
      />
      </article>
      <div className="container2">
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
      </div>
      <h2 className="title">Resultado: {resultado !== null ? resultado : 'Esperando operación...'}</h2>
    </div>
  );
};
