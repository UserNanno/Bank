import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AperturarCuenta from '../components/AperturarCuenta'
import SuspenderCuenta from '../components/SuspenderCuenta'
import ReactivarCuenta from '../components/ReactivarCuenta'
import CerrarCuenta from '../components/CerrarCuenta'
import '../styles/GestionarCuenta.css'
import { useState } from 'react'

function GestionarCuenta() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderActiveComponent = () => {
    console.log('Active Component:', activeComponent); // Depuración
    switch (activeComponent) {
      case 1:
        return <AperturarCuenta />;
      case 2:
        return <SuspenderCuenta />;
      case 3:
        return <ReactivarCuenta />;
      case 4:
        return <CerrarCuenta />;
      default:
        return null;
    }
  };

  return (
    <div >
    <Navbar></Navbar>
    <main className='gestionar-cuenta'>
        <h1>¡Realiza trámites de manera confiable y segura!</h1>
        <p>Tenemos las siguientes opciones para ti </p>
        <div className="gestionar-cuenta__contenido">
            <section className="gestionar-cuenta__contenido__menu">
                <h3 className="gestionar-cuenta__title">Cuenta</h3>
                <ul className="gestionar-cuenta__list">
                    <li><button  id="aperturarCuenta" onClick={() => setActiveComponent(1)}>Aperturar nueva cuenta</button></li>
                    <li><button  id="suspenderCuenta" onClick={() => setActiveComponent(2)}>Suspender cuenta temporalmente</button></li>
                    <li><button  id="reactivarCuenta" onClick={() => setActiveComponent(3)}>Reactivar cuenta</button></li>
                    <li><button  id="cerrarCuenta" onClick={() => setActiveComponent(4)}>Cerrar cuenta</button></li>
                </ul>
            </section>
            <section className="gestionar-cuenta__info" id="info">
              {renderActiveComponent()}
            </section>
        </div>
    </main>
    <Footer></Footer>
    </div>

  )
}

export default GestionarCuenta