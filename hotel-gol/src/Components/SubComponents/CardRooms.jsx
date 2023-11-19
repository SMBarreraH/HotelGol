import React from 'react';
import styles from '../pages/Reservas.module.css'; // Importa tu módulo CSS
import imagenHabitacion from '../../assets/img/imagenHabitacion.png'

export function CardRooms({RoomNormalPrice, RoomEspecialPrice}){
    return(

        
        <div className={styles['card']}>
              <label className={styles['nombre-cama']}>1 cama tamaño King, habitacion</label>

              <div className={styles['detalles-habitacion']}>
                  <div>
                    <img src={imagenHabitacion}/>
                  </div>
                  <section className={styles['lista-tarifas']}>
                      <div className={styles['tarifa']}>
                          <div className={styles['contenedor-tarifa']}>
                            <p className={styles['label-tarifa']}>Tarifa estandar</p>
                            <p>Detalle de la tarifa</p>
                          </div>

                          <div className={styles['contenedor-precio']}>
                            <p> <span>{RoomNormalPrice}</span> Soles/Noche</p>
                          </div>

                            <button className={styles['btn-adicionales']}>
                              SELECCIONAR
                            </button>
                      </div>
                      <div className={styles['tarifa']}>
                          <div className={styles['contenedor-tarifa']}>
                            <p className={styles['label-tarifa']}>Tarifa especial</p>
                            <p className={styles['tarifa-especial']}>  Detalle de la tarifa</p>
                          </div>

                          <div className={styles['contenedor-precio']}>
                            <p> <span>{RoomEspecialPrice}</span> Soles/Noche</p>
                          </div>

                          <button className={styles['btn-registrar']}>
                              SELECCIONAR
                          </button>
                      </div>
                  </section>
              </div>
          </div>
      );
}