import React, { useEffect } from 'react'
import '../styles/PagoServicios.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getUserLocalData, updateUserLocalData } from '../utils/utils';



async function getServicios() {
  const url = 'http://localhost:8080/api/service-payment/servicesDisponibles';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Error');
    } else {
      const data = await response.json();//convierte a objeto javascript

      localStorage.setItem('servicios', JSON.stringify(data));
      populateServicios();
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function populateServicios() {
  const tipoServicio = document.getElementById('tipo-servicio').value;
  const servicios = JSON.parse(localStorage.getItem('servicios'));

  // Filtrar los servicios por tipo de servicio seleccionado
  const filteredServicios = servicios.filter(servicio => servicio.serviceType === tipoServicio);

  // Limpiar las opciones existentes en el select de servicios
  const servicioSelect = document.getElementById('servicio');
  servicioSelect.innerHTML = '';

  // Agregar las opciones filtradas al select de servicios
  filteredServicios.forEach(servicio => {
    const option = document.createElement('option');
    option.value = servicio.companyName;
    option.text = servicio.companyName;
    servicioSelect.appendChild(option);
  });
}

function populateCuentaPago() {
  const user = getUserLocalData();

  if (user && user.bankAccounts) {


    //agregando las cuentas de origen
    const cuentaOrigen = document.getElementById('accountSelect');
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

async function pagarServicio() {
  const user = getUserLocalData();

  const serviceType = document.getElementById('tipo-servicio').value;
  const companyName = document.getElementById('servicio').value;
  const serviceCode = document.getElementById('codigo-pago').value;
  const amount = document.getElementById('monto').value;
  const accountNumber = document.getElementById('accountSelect').value;

  if (serviceCode === '') {
    alert('Por favor, ingrese el codigo de pago');
    return;
  }

  if (amount === '' || isNaN(amount)) {
    alert('Por favor, ingrese un monto válido');
    return;
  }

  const url = 'http://localhost:8080/api/service-payment/payService/' + user.id;;
  //alert(url);
  //alert(`serviceType: ${serviceType}, companyName: ${companyName}, serviceCode: ${serviceCode}, amount: ${amount},  accountNumber: ${accountNumber}`);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "serviceType": serviceType,
      "companyName": companyName,
      "serviceCode": serviceCode,
      "amount": parseFloat(amount),
      "bankAccount":
      {
        "accountNumber": accountNumber
      }
    })

  });
  if (!response.ok) {
    console.error('Error:', response.status);
  } else {
    await updateUserLocalData();
    alert('Pago realizado con éxito');
    window.location.href = './pago-servicios';
  }

}


function PagoServicios() {
  useEffect(() => {
    populateCuentaPago();
    getServicios();
  }, [])
  return (

    <div>
      <Navbar></Navbar>
      <div id='pago-servicios'>
        <h1>PAGO DE SERVICIOS</h1>
        <label htmlFor="tipo-servicio">Seleccione el tipo de servicio</label><br />
        <select name="tipo-servicio" id="tipo-servicio" onChange={populateServicios}>
          <option value="Cable">Cable</option>
          <option value="Educación">Educación</option>
          <option value="Financiero">Financiero</option>
          <option value="Internet">Internet</option>
          <option value="Salud">Salud</option>
          <option value="Seguros">Seguros</option>
          <option value="Servicios de Luz">Servicios de Luz</option>
          <option value="Servicios de Agua">Servicios de Agua</option>
          <option value="Servicios Municipales">Servicios Municipales</option>
          <option value="Telefonía">Telefonía</option>
          <option value="Transporte">Transporte</option>
        </select><br />
        <label htmlFor="servicio">Seleccione el servicio a pagar</label><br />
        <select name="servicio" id="servicio" ></select><br />
        <label htmlFor="codigo-pago">Codigo de pago:</label><br />
        <input type="text" id='codigo-pago' name='codigo-pago' /><br />
        <label htmlFor="monto">Monto a pagar en soles</label><br />
        <input type="text" id='monto' name='monto' /><br />
        <label htmlFor="accountSelect">Seleccione la cuenta a cargo</label><br />
        <select name="accountSelect" id="accountSelect" ></select><br />
        <button onClick={pagarServicio}>Pagar servicio</button>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default PagoServicios
