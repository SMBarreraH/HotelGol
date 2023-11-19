import React from 'react';
import styles from '../pages/Home.module.css'; // Importa tu módulo CSS

import iconoHome from '../../assets/img/iconoHome.svg';
import Almuerzos from '../../assets/img/Almuerzos.svg';
import Cochera from '../../assets/img/Cochera.svg';
import Parrillas from '../../assets/img/Parrillas.svg';
import btnTestimonios from '../../assets/img/btnTestimonios.png'
import Footer from '../UI/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <header className={styles.headerHome}> {/* Usa la clase del módulo CSS */}
        <nav className={styles['Contenedor-Nav']}>
          <Link className={styles.navElement} to='/'>
            Inicio
          </Link>
          <Link className={styles.navElement} to='/Informacion' >Información</Link>
          <Link className={styles.navElement} to='/Habitaciones'>
            Habitaciónes
          </Link>
          <Link className={styles.navElement} to='/Contacto' >Contactanos</Link>
          <Link className={styles.navElement} to='/Reserva'>Reservas</Link>
        </nav>
        <div className={styles['texto-header']}>
          <p className={styles['texto-bienvenido']}>BIENVENIDO AL</p>
          <p className={styles['texto-hotel-gol']}>HOTEL GOL</p>
          <p className={styles['texto-hoteles']}>HOTELES</p>
          <p className={styles['texto-descripcion']}>Reserva tus habitaciones, con facilidad</p>
          <p className={styles['texto-descripcion']}> en tan solo 5 minutos.</p>
        </div>

        <div className={styles.btn}>
          <a href='#servicios' className={styles['btn-entrar']}>
            <img src={iconoHome} alt="Entrar Logo" />
            <p>Entrar</p>
          </a>
        </div>
      </header>

      <section  id='servicios' className={styles.servicios}>
        <h2>Servicios Adicionales</h2>
        <p>
          En nuestro Hotel “Gol”, su comodidad es nuestra prioridad. Ofrecemos una
          cochera privada y segura, vigilada las 24 horas, para proteger su vehículo
          durante su estadía. Además, para satisfacer su apetito, nuestro restaurante
          en el hotel le ofrece una experiencia culinaria excepcional con platos de
          pollos y parrillas preparados por nuestros talentosos chefs. Disfrute de la
          conveniencia y el sabor en un solo lugar.
        </p>
      </section>

      <div className={styles['seccion-servicios']}>
        <div className={styles.seccion}>
          <img src={Cochera} alt="Cochera" />
          <div className={styles['btn-img']}>
            <p>COCHERA</p>
          </div>
        </div>

        <div className={styles.seccion}>
          <img src={Parrillas} alt="Parrillas" />
          <div className={styles['btn-img']}>
            <p>POLLOS Y PARRILAS</p>
          </div>
        </div>

        <div className={styles.seccion}>
          <img src={Almuerzos} alt="Almuerzos" />
          <div className={styles['btn-img']}>
            <p>ALMUERZOS Y CENAS</p>
          </div>
        </div>
      </div>
      {/* testimonios */}
      <section className={styles['testimonios']}>
          <h3>Testimonios</h3>
          <p className={styles['testimonio']}>"El éxito es la suma de pequeños esfuerzos repetidos día tras día."</p>
          <p className={styles['testimonio-autor']}>Rolando Mallqui</p>
          <div className={styles['btn-testimonios']}> 
            <img src={btnTestimonios}  />
          </div>
      </section>

      <Footer/>
    </>
  );
}

export default Home;
