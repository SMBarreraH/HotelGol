import React from 'react';
import Footer from '../UI/Footer';
import styles from '../pages/Reservas.module.css'; // Importa tu módulo CSS

import { CardRooms } from '../SubComponents/CardRooms';

import imagenHabitacion from '../../assets/img/imagenHabitacion.png'
import { Link } from 'react-router-dom';

function Reservas() {
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
            <Link className={styles.navElement} to='/Reserva' >Reservas</Link>
            </div>
        </nav>

        <div className={styles['Titulo-Header']}>
            Reserva Online
        </div>
      </header>

      <div className={styles['contenedor-reserva']}>
        <section className={styles['header-reserva']}>
            <div className={styles['header-horario']}>
              <div>
                
                <p className={styles['label-header']}>Desde</p>
                <input type="date" className={styles['Calendar-style']} required/>
              </div>
              <div>
                <p className={styles['label-header']}>Hasta</p>
                <input type="date" className={styles['Calendar-style']} required/>
              </div>
            </div>
            <div  className={styles['header-habitaciones']}>
              <p className={styles['label-header']}>Habitaciones y huéspedes</p>
              <p className={styles['label-secundario']} >2 Adulto : 0 Niños</p>
            </div>
            <div className={styles['header-botones']}>
              <div className={styles['btn-adicionales']}>
                 <p>ADICIONALES</p>
              </div>
              <div className={styles['btn-registrar']}>
                  <p>REGISTRAR</p>
              </div>
             
            </div>
        </section>
      </div>

      <section className={styles['seccion-habitaciones']}>
        <CardRooms RoomNormalPrice={109} RoomEspecialPrice={99}/>
        <CardRooms RoomNormalPrice={110} RoomEspecialPrice={99}/>
        <CardRooms RoomNormalPrice={270} RoomEspecialPrice={150}/>
        <CardRooms RoomNormalPrice={370} RoomEspecialPrice={250}/>
        <CardRooms RoomNormalPrice={470} RoomEspecialPrice={350}/>
        <CardRooms RoomNormalPrice={570} RoomEspecialPrice={450}/>
        <CardRooms RoomNormalPrice={670} RoomEspecialPrice={550}/>
      </section>

      <Footer/>
    </>
  );
}

export default Reservas;