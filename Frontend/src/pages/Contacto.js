import React from 'react'
import '../styles/Contacto.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contacto() {
  return (


    <div id="contactanos">
    <Navbar />

    <section className="inicio">        
            <div className="imagen_con_texto">
                <img className="fondo-contactanos" src={require("../images/fondo-contactanos.png")} alt="fondo_perfil_contactanos" /> 
                
                <div className="cuadro_con_texto">
                    <p>
                        En National Bank, estamos aquí para ayudarte en todo lo que necesites. Si tienes alguna pregunta o necesitas asistencia, estamos disponibles para ti:
                        <ol className="contacto">
                            <li>Teléfono: Llámanos al 01-400-6000 de lunes a viernes de 9:00 a.m. a 6:00 p.m. Nuestro equipo está listo para atenderte. </li>
                            <li>Correo electrónico: Envía un correo a national.banck@gmail.com desde tu cuenta registrada y te responderemos en un plazo máximo de 24 horas. </li>
                           
                        </ol>
                    </p>
                </div>
             </div>
        <header className="header">
            <div className="logoBlanco">
                <img src={require("../images/logo-blanco.png")} alt="logoBancoBlanco" />
            </div> 

        </header>
    </section>

    <main className="main">
        <div className="visita">
            <div className="info-visita">
                <h4>Visítanos</h4>
                <p >Si prefieres una atención cara a cara, te invitamos a visitar nuestras sucursal ubicacada en la Avenida Javier Prado, San Isidro, Lima</p>
            </div>
            <div className="mapa">
                <img src={require("../images/maps.png")} alt="mapa" />
            </div>
        </div>

        <div className="formulario">
            <h4>Formulario de sugerencias</h4>
            <textarea className="sugerencias" name="sugerencias" rows="10" cols="50" placeholder="Escribe aquí tus sugerencias..."></textarea>
            <br />
            <button type="submit" className="enviar">Enviar</button>
        </div>

    </main>

    
    <Footer />
    </div>

    
  )
}

export default Contacto
