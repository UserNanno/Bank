import React from 'react'
import '../styles/Transferencias.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { getUserLocalData, updateUserLocalData } from '../utils/utils.js'

function populateCuentaOrigen() {
  const user = getUserLocalData();

  if (user && user.bankAccounts) {


    //agregando las cuentas de origen
    const cuentaOrigen = document.getElementById('cuentaOrigen');
    cuentaOrigen.innerHTML = '';

    user.bankAccounts.forEach(account => {
      const option = document.createElement('option');
      option.value = account.accountNumber;
      option.textContent = `Cuenta: ${account.accountNumber} - Saldo: ${account.balance} - Estado: ${account.status}`;

      if (account.status === 'ACTIVE')
        cuentaOrigen.appendChild(option);
    });

  } else {
    console.error('No se encontraron cuentas bancarias para el usuario.');

  }
}

function populateCuentaDestino() {
  const user = getUserLocalData();
  const cuentaOrigen = document.getElementById('cuentaOrigen').value;//cuenta seleccionada
  //agregando las cuentas de Destino
  const cuentaDestino = document.getElementById('cuentaDestino');
  cuentaDestino.innerHTML = '';

  user.bankAccounts.forEach(account => {
    const option = document.createElement('option');
    option.value = account.accountNumber;
    option.textContent = `Cuenta: ${account.accountNumber} - Saldo: ${account.balance} - Estado: ${account.status}`;

    if (account.status === 'ACTIVE' && option.value !== cuentaOrigen) {
      cuentaDestino.appendChild(option);
    }

  });

}

async function transferir() {
  const user = getUserLocalData();

  // Obtener si es transferencia entre cuentas del mismo banco
  const betweenAccounts = document.getElementById('betweenAccounts').checked;

  // Obtener la cuenta de origen
  const cuentaOrigen = document.getElementById('cuentaOrigen').value;

  // Obtener la cuenta de destino, dependiendo del tipo de transferencia
  let cuentaDestino = '';
  if (betweenAccounts) {
    cuentaDestino = document.getElementById('cuentaDestino').value;
  } else {
    cuentaDestino = document.getElementById('cuentaDestinoExterna').value;
  }

  // Obtener el monto a transferir
  const montoTransferir = document.getElementById('montoTransferir').value;

  // Validar los campos antes de proceder con la transferencia
  if (!cuentaDestino) {
    alert('Debe ingresar una cuenta de destino');
  } else if (!montoTransferir) {
    alert('Debe ingresar un monto a transferir');
  } else if (isNaN(montoTransferir) || parseFloat(montoTransferir) <= 0) {
    alert('El monto a transferir debe ser un número mayor a 0');
  } else {
    // Mostrar mensaje de transferencia realizada
    // Preparar datos para la solicitud
    const url = `http://localhost:8080/api/transaction/transfer/${user.id}`;
    const data = {
      "fromAccount": {
        "accountNumber": cuentaOrigen,
      },
      "toAccount": {
        "accountNumber": cuentaDestino,
      },
      "amount": parseFloat(montoTransferir),
    };

    try {
      // Realizar la solicitud de transferencia
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Procesar respuesta exitosa
        const responseData = await response.text();
        console.log('Transaction performed successfully:', responseData);
        await updateUserLocalData();
        alert('Transferencia realizada con éxito');
        window.location.href = './transferencias';
      } else {
        // Manejo de errores de la solicitud
        console.error('Error en la transacción:', response.status, response.statusText);
        alert(`Error en la transacción: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      // Manejo de errores de conexión
      console.error('Error en la conexión:', error);
    }
  }
}



function Transferencias() {
  const [tipo, setTipo] = useState(0)//0: transferencias entre cuentas propias, 1: a cuentas externas

  useEffect(() => {
    if (tipo === 0) {
      document.getElementById('externa').style.display = 'none';
      document.getElementById('interna').style.display = 'block';
    }

    if (tipo === 1) {
      document.getElementById('externa').style.display = 'block';
      document.getElementById('interna').style.display = 'none';
    }

  }, [tipo])

  //agregar las cuentas del usuario al select
  useEffect(() => {
    populateCuentaOrigen();
    populateCuentaDestino();
  }, [])

  return (
    <div>
      <Navbar></Navbar>
      <div id='transferencias'>
        <h1>¡Realiza transferencias de manera confiable y segura!</h1>

        <div className="contenido-transferencias">
          <img src={require('../images/tranferencia.png')} alt="imagen transferencia" />
          <p>Transfiere entre tus cuentas y cuentas externas </p>
        </div>

        <div className="transferencias">
          <input type="radio" name="transferType" value="betweenAccounts" id="betweenAccounts" onChange={() => setTipo(0)} defaultChecked /> Entre cuentas propias
          <input type="radio" name="transferType" value="toExternalAccounts" id="toExternalAccounts" onChange={() => setTipo(1)} /> A cuentas externas
        </div>

        <div className="cuentaOrigen">
          <label htmlFor="cuentaOrigen" >Seleccione la cuenta de origen</label><br />
          <select name="cuentaOrigen" id="cuentaOrigen" onChange={populateCuentaDestino}>
          </select>
        </div>

        <div className="cuentaDestino" id='interna'>
          <label htmlFor="cuentaDestino">Seleccione la cuenta de destino</label><br />
          <select name="cuentaDestino" id="cuentaDestino">
          </select>
        </div>

        <div className="cuentaDestinoExterna" id='externa'>
          <label htmlFor="cuentaDestinoExterna">Ingrese la cuenta de destino</label><br />
          <input type="text" id="cuentaDestinoExterna" />
        </div>

        <div className="montoTransferir">
          <label htmlFor="montoTransferir">Ingrese el monto a transferir en soles</label><br />
          <input type="text" id="montoTransferir" />
        </div>

        <button id="ejecutarTransferencia" className="ejecutarTransferencia" onClick={transferir} >Transferir</button>
      </div>
      <Footer></Footer>
    </div>

  )
}

export default Transferencias
