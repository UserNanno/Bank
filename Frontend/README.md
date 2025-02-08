# Proyecto: Validación de Formulario

## Violación 1: Complejidad Cognitiva Elevada

### Descripción:
SonarLint detectó que la función `validateForm` tenía una **complejidad cognitiva** de 22, lo cual excedía el límite permitido de 15. Esto ocurría debido a la gran cantidad de condiciones anidadas y validaciones dentro de una única función. La función era difícil de entender y mantener debido a su longitud y la cantidad de decisiones que debía tomar.

### Corrección/Refactorización:
La función fue dividida en varias funciones más pequeñas, cada una encargada de una validación específica (por ejemplo, validar el DNI, validar el nombre, etc.). Además, se implementaron **retornos tempranos** para evitar la anidación de condiciones y reducir la complejidad.

### Fragmento de Código Antes de la Corrección:

const validateForm = async (event) => {
    event.preventDefault();

    const dni = event.target['dni'].value.trim();
    const nombre = event.target['nombre'].value.trim();
    const apellidos = event.target['apellidos'].value.trim();
    const correo = event.target['correo'].value.trim();
    const celular = event.target['celular'].value.trim();
    const fechaNacimiento = event.target['fechaNacimiento'].value.trim();
    const password = event.target['password'].value.trim();
    const passwordConfirmed = event.target['passwordConfirmed'].value.trim();

    setErrorMessage('');

    let valid = true;

    if (!dni) {
        setErrorMessage('El número de documento es obligatorio.');
        valid = false;
    } else if (documentType === 'DNI' && !/^\d{8}$/.test(dni)) {
        setErrorMessage('El DNI debe tener 8 dígitos.');
        valid = false;
    } else if (documentType === 'Carnet de Extranjeria' && !/^[a-zA-Z0-9]{9}$/.test(dni)) {
        setErrorMessage('El Carnet de Extranjería debe tener 9 caracteres alfanuméricos.');
        valid = false;
    }

    if (!nombre) {
        setErrorMessage('El nombre es obligatorio.');
        valid = false;
    }

    // Otras validaciones similares...
};


## Violación 2: Uso innecesario de `if` anidado en bloque `else`

### Descripción:
SonarLint detectó que había un `if` anidado dentro de un bloque `else`, lo que hacía que el código fuera innecesariamente complejo. Según la recomendación de buenas prácticas, se debe evitar tener un `if` como única declaración en un bloque `else`. Esto puede simplificarse usando `else if`, lo cual mejora la legibilidad y facilita el mantenimiento del código.

### Corrección/Refactorización:
El bloque `else` fue refactorizado para usar un `else if`, lo que elimina el anidamiento innecesario y hace que el flujo lógico sea más claro y legible.

### Fragmento de Código Antes de la Corrección:

if (pin === password) {
  crearCuenta();
} else {
  if (pin === '') {
    alert('Ingrese su contraseña');
  } else {
    alert('Contraseña incorrecta');
  }
}

### Fragmento de Código Despues de la Corrección:

if (pin === password) {
      crearCuenta();
    } else if (pin === '') {
      alert('Ingrese su contraseña');
    } else {
      alert('Contraseña incorrecta');
    }


## Violación 3: A form label must be associated with a control

### Descripción:
SonarLint detectó que las etiquetas `<label>` no estaban correctamente asociadas con los controles de formulario. En React, no se debe usar el atributo `for` en las etiquetas `<label>`, sino que los elementos de entrada (como `<input>`, `<select>`) deben estar dentro del elemento `<label>`. Esto mejora la accesibilidad y sigue las mejores prácticas de HTML.

### Corrección/Refactorización:
Se refactorizó el código para que cada etiqueta `<label>` envuelva a su respectivo control de formulario. Esto asegura que el campo de entrada esté correctamente asociado con la etiqueta, lo que mejora la accesibilidad y la interacción del usuario.

### Fragmento de Código Antes de la Corrección:

<label for="dni">Tipo Documento</label>
<select id="dni" disabled="disabled">
  <option value="DNI">DNI</option>
  <option value="CE">Carnet de Extranjería</option>
</select>

<label for="nombres">Nombres</label>
<input id="nombres" type="text" disabled="disabled" />

<label for="celular">Celular</label>

### Fragmento de Código Despues de la Corrección:
<label>
  Tipo Documento
  <select id="dni" disabled="disabled">
    <option value="DNI">DNI</option>
    <option value="CE">Carnet de Extranjería</option>
  </select>
</label>

<label>
  Nombres
  <input id="nombres" type="text" disabled="disabled" />
</label>

<label>
  Celular
  <input id="celular" type="text" disabled="disabled" />
</label>

