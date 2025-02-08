import React from 'react'
import { useEffect } from 'react'
import { getUserLocalData } from '../utils/utils.js'
import '../styles/EstadoCuenta.css'

function cargarCuentas(){
  const user = getUserLocalData();
  const cardsCuentas = document.querySelector('.cards-cuentas');
  cardsCuentas.innerHTML = '';
  user.bankAccounts.forEach(account => {
    const card = document.createElement('div');
    card.className = 'card-cuenta';
    card.innerHTML = `
      <h3>Cuenta: ${account.accountNumber}</h3>
      <p>Saldo: ${account.balance}</p>
      <p>Estado: ${account.status}</p>
    `;
    cardsCuentas.appendChild(card);
  });

}

function EstadoCuenta() {
  useEffect(() => {
    cargarCuentas();
  }, []);
  
  
  return (
    <div id="cuentas">
      <h2>Tus cuentas</h2>
      <div class="cards-cuentas">
      </div>

    </div>
  )
}

export default EstadoCuenta