import React from 'react';
import styles from '../UI/Footer.module.css'; // Importa tu módulo CSS
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
import instagram from '../../assets/img/instagram.png'
function Footer() {
  return (
    <>
        <footer>
            <div className={styles['contacto']}>
                <strong className={styles['titulo-hotel']}>HOTEL GOL</strong>
                <p>Santa Lucia N° 223 </p>
                <p>998238144</p>
                <p>gol@gmail.com</p>
            </div>
            <div className={styles['footer-informacion']}>
                <p>Nosotros Somos</p>
                <p>Contactanos</p>
                <p>Terminos y Condiciones</p>
            </div>
            <div className={styles['redes-sociales']}>
                <div className={styles['enlace']}>
                    <img src={facebook} alt="" />
                    <p>Facebook</p>
                </div>
                <div className={styles['enlace']}>
                    <img src={twitter} alt="" />
                    <p>Twitter</p>
                </div>
                <div className={styles['enlace']}>
                    <img src={instagram} alt="" />
                    <p>Instagram</p>
                </div>
            </div>
            <div className={styles['footer-suscribete']}>
                <p>Suscribete</p>
                <div className={styles['formulario-suscribete']}>
                    <input type="text" placeholder='correo electronico' />
                    <div className={styles['btn-ok']}>
                        <p>OK</p>
                    </div>
                    
                </div>
            </div>
        </footer>
    </>
  );
}

export default Footer;
