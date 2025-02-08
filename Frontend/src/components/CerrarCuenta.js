import React from 'react'
import '../styles/CerrarCuenta.css'
import { useEffect } from 'react'
import { getUserLocalData,updateCuenta,populateAccountSelect } from '../utils/utils.js'

function CerrarCuenta() {
  async function  handleClick(){
    const numeroCuenta=document.getElementById('accountSelect').value;

    const user = getUserLocalData();

        if (user.password === document.getElementById('pin').value) {
          await updateCuenta(numeroCuenta,'CERRADA');
          alert('Cuenta cerrada de manera exitosa');
          window.location.href = './gestionar-cuenta';
        } else {
            if (document.getElementById('pin').value === '') {
                alert('Debe ingresar una clave');
            } else alert('Clave incorrecta');
        }
  }
  useEffect(() => {
    populateAccountSelect(3);
  }, [])
  return (
    <div id="cerrar-cuenta">
    <h2>Cerrar cuenta</h2>
    <form className="cerrar-form">


        <select id="accountSelect">
        </select>


        <select id="motivo-select">
            <option value="">Indique el motivo...</option>
            <option value="1">Perdida/hurto de tarjeta</option>
            <option value="2">Sospecha de fraude</option>
            <option value="2">Otros</option>
        </select>
        <textarea name="textarea" id="textarea" placeholder="Describa brevemente"></textarea>

        <label htmlFor="pin">Para cerrar una cuenta, ingrese su contraseña</label><br />
        <input name='pin' id="pin" type="password" placeholder="Ingrese contraseña" required /><br />

        <button type="reset" id="cerrar-cuenta" onClick={handleClick}>Continuar</button>
    </form>

</div>
  )
}

export default CerrarCuenta
