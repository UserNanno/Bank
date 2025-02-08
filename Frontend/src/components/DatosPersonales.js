import React from 'react'
import '../styles/DatosPersonales.css'
import { useEffect } from 'react'

function DatosPersonales() {
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const userObject = JSON.parse(user)

      document.getElementById('nombres').value = userObject.firstName
      document.getElementById('celular').value = userObject.phone
      document.getElementById('numero-documento').value = userObject.numIdentification
      document.getElementById('apellidos').value = userObject.lastName
      document.getElementById('fecha-nacimiento').value = userObject.birthDate
    }
  }, [])

  return (
    <div id="datos-personales">
    <h2>Información Personal</h2>
    <form className="formDatos">
      <div>
        <label for="dni">Tipo Documento</label>
        <select id="dni" disabled="disabled">
          <option value="DNI">DNI</option>
          <option value="CE">carnet de extranjería</option>
        </select>

        <label for="nombres">Nombres</label>
        <input id="nombres" type="text" disabled="disabled" />

        <label for="celular">Celular</label>
          <input id="celular" type="tel" placeholder="Ingrese su número de celular" disabled="disabled" />
        </div>

        <div>
          <label for="numero-documento">Número de Documento</label>
          <input id="numero-documento" type="text" placeholder="Ingrese su número de documento" disabled="disabled" />

          <label for="apellidos">Apellidos</label>
          <input id="apellidos" type="text" placeholder="Ingrese sus apellidos" disabled="disabled" />

          <label for="fecha-nacimiento">Fecha de Nacimiento</label>
          <input id="fecha-nacimiento" type="date" disabled="disabled" />
        </div>
      </form>
    </div>
  )
}

export default DatosPersonales
