import React, { useState, useEffect } from 'react';
import '../styles/Perfil.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DatosPersonales from '../components/DatosPersonales';
import EstadoCuenta from '../components/EstadoCuenta';

function Perfil() {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [activeComponent, setActiveComponent] = useState(1);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userObject = JSON.parse(user);
      setUserFirstName(userObject.firstName);
      setUserLastName(userObject.lastName);
    }
  }, []);

  const renderActiveComponent = () => {
    // Depuración
    switch (activeComponent) {
      case 1:
        console.log('Active Component:', activeComponent); 
        return <DatosPersonales />;
      case 2:
        console.log('Active Component:', activeComponent); 
        return <EstadoCuenta />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />

      <div id='perfil'>
        <section className='banner-lateral'>
          <img className="userPhoto" alt="foto" src={require('../images/foto-usuario.png')} />
          <h3><span>{userFirstName || 'Nombre'}</span></h3>
          <h3><span>{userLastName || 'Apellido'}</span></h3>
          <hr />
          <nav>
            <ul>
              <li><button id="cuenta" onClick={() => setActiveComponent(1)}>Mi Perfil</button></li>
              <li><button id="tarjeta" onClick={() => setActiveComponent(2)}>Estado de Cuentas</button></li>
            </ul>
          </nav>
          <img className="logo" alt="logo empresa" src={require('../images/logo-blanco.png')} />
        </section>

        <div>
          <main>
            {renderActiveComponent()}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;

