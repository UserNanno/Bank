import React from 'react'
import '../styles/ReactivarCuenta.css'
import { useEffect } from 'react'
import { getUserLocalData,updateCuenta,populateAccountSelect } from '../utils/utils.js'

function ReactivarCuenta() {
  async function  handleClick(){
    const numeroCuenta=document.getElementById('accountSelect').value;

    const user = getUserLocalData();

        if (user.password === document.getElementById('pin').value) {
          await updateCuenta(numeroCuenta,'ACTIVE');
          alert('Cuenta reactivada de manera exitosa');
          window.location.href = './gestionar-cuenta';
        } else {
            if (document.getElementById('pin').value === '') {
                alert('Debe ingresar una clave');
            } else alert('Clave incorrecta');
        }
  }
  useEffect(() => {
    populateAccountSelect(2);
  }, [])
  return (
    <div id="reactivar-cuenta">
    <h2>Reactivación de cuenta</h2>
    <form className="reactivationForm">

        <label htmlFor="accountSelect">Seleccionar cuenta</label>
        <select id="accountSelect">
        </select>

        <label htmlFor="pin">Clave web</label>
        <input id="pin" type="password" placeholder="Ingrese su clave web"/>

        
        <button type="reset" id="reactivar-cuenta" onClick={handleClick}>Reactivar</button>
    </form>
    
</div>
  )
}

export default ReactivarCuenta