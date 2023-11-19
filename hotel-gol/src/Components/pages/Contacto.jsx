import React, { useState } from 'react';
import Footer from '../UI/Footer';
import styles from '../pages/Contacto.module.css'; // Importa tu módulo CSS
import Axios from 'axios'




import { Link } from 'react-router-dom';

function Contacto() {

  const [names, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const addContact = () =>{
    Axios.post('http://localhost:3001/create', {
      names: names,
      number: number,
      message: message
    }).then(() => console.log("insertado"));
  };

  return (
    <>
      <header className={styles.headerHabitaciones}> {/* Usa la clase del módulo CSS */}
        

        <nav className={styles['Contenedor-Nav']}>
          <div className={styles['logotipo']}>
            <p className={styles['Titulo-gol']} >GOL</p>
            <p className={styles['Titulo-hoteles']}>HOTELS</p>
          </div>
          <div className={styles['Enlaces-Nav']}>
            <Link className={styles.navElement} to='/'>
              Inicio
            </Link>
            <Link className={styles.navElement} to='/Informacion'>Información</Link>
            <Link className={styles.navElement} to='/Habitaciones'>
              Habitaciónes
            </Link>
            <Link className={styles.navElement} to='/Contacto' >Contactanos</Link>
            <Link className={styles.navElement} to='/Reserva'>Reservas</Link>
            </div>
        </nav>

        <div className={styles['Titulo-Header']}>
            Contáctanos
        </div>
      </header>

      <section className={styles['descripcion-contacto']}>
        <h2>Nosotros estamos para ayudarte</h2>
        <p>
          En Hotel Gol nos tomamos en serio a nuestros clientes. ¿Tiene alguna consulta, queja o petición?
          reenvíelo a nuestro servicio de soporte y nos comunicaremos con usted lo antes posible.
       </p>
      </section>

      <section className={styles['informacion-formulario']}>
            <div className={styles['informacion']}>
              <h4>Santa Lucia N°233</h4>
              <h4>Ver en mapa ➜</h4>
              <h4>Telefono: 998238144 </h4>
              <h4>Email: gol@gmail.com</h4>
            </div>
        
        <div className={styles['formulario']}>
            <label htmlFor="">Nombres</label>
            <input 
            type="text" onChange={(event)=>{
              setName(event.target.value)
            }} name="" id="" />

            <label htmlFor="">Numero Telefonico</label>
            <input type="text" 
            onChange={(event)=>{
              setNumber(event.target.value)
            }} name="" id="" />

            <label htmlFor="">Mensaje</label>
            <textarea onChange={(event)=>{
              setMessage(event.target.value)
            }} ></textarea>
            <button onClick={addContact} className={styles['btn-enviar']}>
              <p>Enviar</p>
            </button>          
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Contacto;
