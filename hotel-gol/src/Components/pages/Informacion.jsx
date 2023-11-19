import React from 'react';
import styles from '../pages/Informacion.module.css'; // Importa tu módulo CSS
import Footer from '../UI/Footer';
import iconoHome from '../../assets/img/iconoHome.svg';
import add from '../../assets/img/add.png';
import Almuerzos from '../../assets/img/Almuerzos.svg';
import Cochera from '../../assets/img/Cochera.svg';
import Parrillas from '../../assets/img/Parrillas.svg';
import doubleRoom from '../../assets/img/doubleRoom.png'
import habitacionIndividual from '../../assets/img/habitacionIndividual.png'
import salasExoticas from '../../assets/img/salasExoticas.png'
import { Link } from 'react-router-dom';

function Informacion() {
  return (
    <>
      <header className={styles.headerHabitaciones}> {/* Usa la clase del módulo CSS */}
        <nav className={styles['Contenedor-Nav']}>
          <Link className={styles.navElement} to='/'>
            Inicio
          </Link>
          <Link className={styles.navElement} to='/Informacion' >Información</Link>
          <Link className={styles.navElement} to='/Habitaciones'>
            Habitaciónes
          </Link>
          <Link className={styles.navElement} to='/Contacto'>Contactanos</Link>
          <Link className={styles.navElement}to='/Reserva' >Reservas</Link>
        </nav>
        <div className={styles['texto-header']}>
          <p className={styles['texto-bienvenido']}>BIENVENIDO AL</p>
          <p className={styles['texto-hotel-gol']}>HOTEL GOL</p>
          <p className={styles['texto-hoteles']}>HOTELES</p>
          <p className={styles['texto-descripcion']}>Reserva tus habitaciones, con facilidad</p>
          <p className={styles['texto-descripcion']}> en tan solo 5 minutos.</p>
        </div>

        <div className={styles.btn}>
          <div className={styles['btn-entrar']}>
            <img src={iconoHome} alt="Entrar Logo" />
            <p>Entrar</p>
          </div>
        </div>
      </header>

      <section className={styles['servicios']}>
        <h2>HABITACIONES Y TARIFAS</h2>
        <p>
          Cada una de nuestras luminosas habitaciones cuenta con todo lo que pueda necesitar para una estancia confortable. Y si, la comodidad no es nuestro único objetivo, también valoramos el buen diseño, el mobiliario elegante y contemporáneo complementado por los ricos tonos de la paleta de la naturaleza, visibles desde las ventanas y terrazas con vista al mar de nuestras habitaciones.
        </p>
      </section>

      <div className={styles['seccion-servicios']}>
            <div className={styles['seccion']}>
              <img className={styles['img-seccion']} src={habitacionIndividual} alt="Cochera" />
              <div className={styles['btn-img']}>
                <p>Individuales</p>
              </div>
              <div className={styles['detalle-habitacion']}>
                  <img className={styles['img-add']} src={add}/>
                  <h3  >Ver detalles de la habitación</h3>
                  <div className={styles['btn-precio']}>
                    <p>S/.30</p>
                  </div>
              </div>
            </div>

            <div className={styles['seccion']}>
              <img className={styles['img-seccion']} src={salasExoticas} alt="Cochera" />
              <div className={styles['btn-img']}>
                <p>Salas Exóticas</p>
              </div>
              <div className={styles['detalle-habitacion']}>
                  <img className={styles['img-add']} src={add}/>
                  <h3  > Ver detalles de la habitacion</h3>
                  <div className={styles['btn-precio']}>
                    <p>S/.90</p>
                  </div>
              </div>
            </div>

            <div className={styles['seccion']}>
              <img className={styles['img-seccion']} src={doubleRoom} alt="Cochera" />
              <div className={styles['btn-img']}>
                <p>Habitaciones Dobles</p>
              </div>
              <div className={styles['detalle-habitacion']}>
                  <img className={styles['img-add']} src={add}/>
                  <h3  >Ver detalles de la habitación</h3>
                  <div className={styles['btn-precio']}>
                    <p>S/.60</p>
                  </div>
              </div>
            </div>
      </div> 
      {/* fin seccion servicios */}
      <Footer/>
    </>
  );
}

export default Informacion;
