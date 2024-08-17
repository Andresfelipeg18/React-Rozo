import  { useState } from 'react';
import './Saludar2.css';


export const Saludar2 = () => {
    const [name, setName] = useState(''); 
    const [message, setMessage] = useState(''); 
  
    const handleChange = (e) => {
      setName(e.target.value); 
    };
  
    const handleClick = () => {
      setMessage(`Bienvenido, ${name}!`); 
    };
  
    return (
      <div className='Saludar'>
        <div className="form__group field">
          <input 
            type="text" 
            className="form__field" 
            placeholder="Name" 
            value={name} 
            onChange={handleChange} 
            required 
          />
          <label htmlFor="name" className="form__label">Name</label>
        </div>
        <div className='box-btn'>
        <button className='btn-saludar' onClick={handleClick}>Salúdame</button>
        {message && <p className='welcome-message'>{message}</p>}
        </div>
   </div>
  );
  }
