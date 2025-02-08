import React from 'react'
import '../styles/Nosotros.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Nosotros() {
  return (
    
    <div id="nosotros">
    <Navbar/>
    <section className="inicio">
        <div className="franja"></div>
            
            <div className="imagen_con_texto">
                <img src={require('../images/fondoBancoNosotros.png')} alt="fondo_perfil" /> 
                <div className="cuadro_con_texto">
                    <p>
                        En National Bank, nos enorgullecemos de ser una institución 
                        financiera sólida y confiable con una larga trayectoria de 
                        servicio a nuestras comunidades. Desde nuestra fundación, 
                        hemos estado comprometidos con brindar soluciones financieras 
                        innovadoras y personalizadas que ayuden a nuestros clientes a 
                        alcanzar sus metas.
                    </p>
                </div>
             </div>
        <header className="header">
            <div className="logoOscuro">
                <img src={require("../images/logoBancoOscuro.png")} alt="logoBancoOscuro"/>
            </div> 
        </header>
    </section>


    <section className="centro">
            <p className="nombre"> NATIONAL BANK </p> 
            <hr className="barraIzquierda"/>
            <hr className="barraDerecha"/>
            <br/>
            <p className="lema"> Tu aliado financiero de confianza</p>
    </section>


    <main className="main">

        <aside className="bloqueInferior">
            <article className="art">National Bank tiene una larga y rica historia que se remonta al año 2000. Desde nuestros humildes comienzos como una pequeña institución financiera local, hemos crecido hasta convertirnos en un banco sólido y confiable con una presencia significativa en nacional.
                A lo largo de nuestra historia, nos hemos mantenido comprometidos con nuestros valores fundamentales de integridad, responsabilidad y compromiso con el cliente. Esto nos ha permitido ganarnos la confianza de generaciones de clientes y construir una reputación sólida como institución financiera confiable.
            </article>

            <aside className="cuadro-imagen-titulo">
                <div className="imgContenido">
                <img src={require("../images/logoHistoria.png")} alt="logoHistoria" /> 
                </div>
                <div className="contenido-nombre">
                    <p className="nombre">HISTORIA</p>
                </div>
            </aside>
        </aside>
     
            
        <aside className="bloqueInferior">
            <article className="art"> 
                Nuestra misión es ser el banco preferido de nuestros clientes, ofreciendo un servicio excepcional 
                y productos financieros que satisfagan sus necesidades únicas. Nos comprometemos a brindar 
                soluciones financieras innovadoras y personalizadas que ayuden a nuestros clientes a 
                alcanzar sus metas, todo ello mientras mantenemos los más altos estándares de integridad, 
                responsabilidad y compromiso con la comunidad.
            </article>

            <aside className="cuadro-imagen-titulo">
                <div className="imgContenido">
                <img src={require("../images/logoMision.png")} alt="logoHistoria" /> 
                </div>
                <div className="contenido-nombre">
                    <p className="nombre">MISIÓN</p>
                </div>
            </aside>
        </aside>

        <aside className="bloqueInferior">
            <article className="art">
                Aspiramos a ser el banco líder en el mercado, reconocido por su excelencia en el servicio al cliente, 
                su innovación financiera y su compromiso con el desarrollo sostenible. Buscamos ser la institución 
                financiera de referencia para nuestros clientes, empleados y comunidades, creando un valor compartido 
                duradero para todos los stakeholders.
            </article>

            <aside className="cuadro-imagen-titulo">
                <div className="imgContenido">
                <img src={require("../images/logoVision.png")} alt="logoHistoria" /> 
                </div>
                <div className="contenido-nombre">
                    <p className="nombre">VISIÓN</p>
                </div>
            </aside>
        </aside>
    </main>

    <section className="people">

        <div className="contenedor-people">
            <div className="img">
                <img src={require("../images/people1.png")} alt="ceo" />
            </div>
            <hr/>
            <div className="nombre-people">
                <strong><p>CEO</p></strong> <br/>
                <p>Luz Estrada Martinez </p>
            </div>
        </div>

        <div className="contenedor-people">
            <div className="img">
                <img src={require("../images/people2.png")} alt="ceo"/>
            </div>
            <hr/>
            <div className="nombre-people">
                <strong><p>CFO</p></strong> <br/>
                <p>Carlos Álvarez Días  </p>
            </div>
        </div>

        <div className="contenedor-people">
            <div className="img">
                <img src={require("../images/people3.png")} alt="ceo"/>
            </div>

            <hr className="line-people"/>

            <div className="nombre-people">
                <strong><p>DIRECTOR DE TECNOLOGÍA </p></strong> <br/>
                <p>Adrian Hernández Navarro  </p>
            </div>
        </div>

    </section>
    <Footer/>
  </div>
  )
}

export default Nosotros