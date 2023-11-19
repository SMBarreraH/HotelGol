// import React, { useState } from 'react';
// import styles from '../pages/Habitaciones.module.css'; // Importa tu módulo CSS
// import Footer from '../UI/Footer';
// import { Link } from 'react-router-dom';




// function Habitaciones() {
//   const [estilos, setEstilos] = useState(
//     Array(35).fill().map(() => ({ backgroundColor: 'green', cursor: 'pointer' }))
//   );

//   // Función para cambiar el estilo al hacer clic
//   const cambiarEstilo = (index) => {
//     setEstilos((prevEstilos) => {
//       const nuevoEstilo = prevEstilos[index].backgroundColor === 'green'
//         ? { backgroundColor: 'red', cursor: 'pointer' }
//         : { backgroundColor: 'green', cursor: 'pointer' };

//       return [
//         ...prevEstilos.slice(0, index),
//         nuevoEstilo,
//         ...prevEstilos.slice(index + 1),
//       ];
//     });
//   };

//   return (
//     <>
//       <header className={styles.headerHabitaciones}> {/* Usa la clase del módulo CSS */}
        

//         <nav className={styles['Contenedor-Nav']}>
//           <div className={styles['logotipo']}>
//             <p className={styles['Titulo-gol']} >GOL</p>
//             <p className={styles['Titulo-hoteles']}>HOTELS</p>
//           </div>
//           <div className={styles['Enlaces-Nav']}>
//             <Link className={styles.navElement} to='/'>
//               Inicio
//             </Link>
//             <Link className={styles.navElement} to='/Informacion'>Información</Link>
//             <Link className={styles.navElement} to='/Habitaciones'>
//               Habitaciónes
//             </Link>
//             <Link className={styles.navElement} to='/Contacto' >Contactanos</Link>
//             <Link className={styles.navElement} to='/Reserva'>Reservas</Link>
//             </div>
//         </nav>

//         <div className={styles['Titulo-Header']}>
//             Habitaciones
//         </div>
//       </header>
// {/* 
//       <section className={styles['seccion-habitaciones']}>
//         <div className={styles['numeros-habitaciones']}> 
//             <p>1</p>
//             <p>2</p>
//             <p>3</p>
//             <p>4</p>
//             <p>5</p>
//         </div>
//         <div className={styles['Contenedor-Habitaciones']}>
//           <div className={styles['Habitacion-fila']}>
//               <div ></div>
//               <div  ></div>
//               <div  ></div>
//               <div ></div>
//               <div ></div>
//               <div ></div>
//               <div ></div>

//           </div>
//           <div className={styles['Habitacion-fila']}>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//           </div>
//           <div className={styles['Habitacion-fila']}>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//           </div>
//           <div className={styles['Habitacion-fila']}>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//           </div>
//           <div className={styles['Habitacion-fila']}>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//               <div onClick={cambiarEstilo} style={estilo} ></div>
//           </div>
//         </div>
//       </section> */}
//          <section className={styles['seccion-habitaciones']}>
//         <div className={styles['numeros-habitaciones']}>
//           {Array(5).fill().map((_, rowIndex) => (
//             <p key={rowIndex}>{rowIndex + 1}</p>
//           ))}
//         </div>
//         <div className={styles['Contenedor-Habitaciones']}>
//           {Array(5).fill().map((_, rowIndex) => (
//             <div key={rowIndex} className={styles['Habitacion-fila']}>
//               {estilos.slice(rowIndex * 7, (rowIndex + 1) * 7).map((estilo, index) => (
//                 <div
//                   key={index}
//                   onClick={() => cambiarEstilo(rowIndex * 7 + index)}
//                   style={estilo}
//                 ></div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </section>
      

//       <section className={styles['Formulario-Habitaciones']}>
//           <div className={styles['Formulario-datos']}>
//             <label>Cantidad Personas</label>
//             <input type="text" />
//             <label htmlFor="">Fecha y Hora</label>
//             <input type="text" />
//           </div>
//           <div className={styles['Formulario-observacion']}>
//             <label htmlFor="">Observaciones</label>
//             <textarea ></textarea>

//             <div className={styles['btn-enviar']}>
//               <p>Enviar</p>
//             </div>  
//           </div>
          
//       </section>

//       <Footer/>

//     </>
//   );
// }

// export default Habitaciones;

import React, { useState } from 'react';
import styles from '../pages/Habitaciones.module.css'; // Importa tu módulo CSS
import Footer from '../UI/Footer';
import { Link } from 'react-router-dom';

function Habitaciones() {
  const [estilos, setEstilos] = useState(
    Array(35).fill().map(() => ({ backgroundColor: 'green', cursor: 'pointer' }))
  );

  const cambiarEstilo = (index) => {
    setEstilos((prevEstilos) => {
      const nuevoEstilo = prevEstilos[index].backgroundColor === 'green'
        ? { backgroundColor: 'red', cursor: 'pointer' }
        : { backgroundColor: 'green', cursor: 'pointer' };

      return [
        ...prevEstilos.slice(0, index),
        nuevoEstilo,
        ...prevEstilos.slice(index + 1),
      ];
    });
  };

  return (
    <>
      <header className={styles.headerHabitaciones}>
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
          Habitaciones
        </div>
      </header>

      <section className={styles['seccion-habitaciones']}>
        <div className={styles['numeros-habitaciones']}>
            {Array(5).fill().map((_, rowIndex) => (
              <p key={rowIndex} className={styles.numbers}>
                {rowIndex * 7 + 1}
              </p>
            ))}
          </div>
        <div className={styles['Contenedor-Habitaciones']}>
          {Array(5).fill().map((_, rowIndex) => (
              <div key={rowIndex} className={styles['Habitacion-fila']}>
                {estilos.slice(rowIndex * 7, (rowIndex + 1) * 7).map((estilo, index) => (
                  <div
                    key={rowIndex * 7 + index}
                    onClick={() => cambiarEstilo(rowIndex * 7 + index)}
                    style={estilo}
                    className={styles['Habitacion-cuadro']}
                  >
                    <p className={styles.numbers}>
                      {rowIndex * 7 + index + 1}
                    </p>
                  </div>
                ))}
              </div>
          ))}
        </div>
      </section>

      <section className={styles['Formulario-Habitaciones']}>
        <div className={styles['Formulario-datos']}>
          <label>Cantidad Personas</label>
          <input type="text" />
          <label htmlFor="">Fecha y Hora</label>
          <input type="text" />
        </div>
        <div className={styles['Formulario-observacion']}>
          <label htmlFor="">Observaciones</label>
          <textarea ></textarea>
          <div className={styles['btn-enviar']}>
            <p>Enviar</p>
          </div>  
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Habitaciones;
