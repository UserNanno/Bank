import './App.css';
import { Route, Routes } from 'react-router-dom';

//importamos las paginas
import Contacto from './pages/Contacto';
import GestionarCuenta from './pages/GestionarCuenta';
import Inicio from './pages/Inicio';
import Menu from './pages/Menu';
import Nosotros from './pages/Nosotros'; 
import PagoServicios from './pages/PagoServicios';
import Perfil from './pages/Perfil';
import Registro from './pages/Registro';
import Transferencias from './pages/Transferencias';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/transferencias" element={<Transferencias />}></Route>
        <Route path="/pago-servicios" element={<PagoServicios />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/gestionar-cuenta" element={<GestionarCuenta />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
      </Routes>
    </div>
  );
}

export default App;
