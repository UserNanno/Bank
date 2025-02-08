import React, { useState } from 'react';
import '../styles/Registro.css';
import logo from '../images/logo.png';

export default function Registro() {
    const [errorMessage, setErrorMessage] = useState('');

    // Función principal de validación de formulario
    const validateForm = async (event) => {
        event.preventDefault();

        const documentType = event.target['document-type'].value;
        const dni = event.target['dni'].value.trim();
        const nombre = event.target['nombre'].value.trim();
        const apellidos = event.target['apellidos'].value.trim();
        const correo = event.target['correo'].value.trim();
        const celular = event.target['celular'].value.trim();
        const fechaNacimiento = event.target['fechaNacimiento'].value.trim();
        const password = event.target['password'].value.trim();
        const passwordConfirmed = event.target['passwordConfirmed'].value.trim();

        setErrorMessage('');

        // Validar entradas del formulario y retornar si hay errores
        if (!validateDni(documentType, dni)) return;
        if (!validateNombre(nombre)) return;
        if (!validateApellidos(apellidos)) return;
        if (!validateCorreo(correo)) return;
        if (!validateCelular(celular)) return;
        if (!validateFechaNacimiento(fechaNacimiento)) return;
        if (!validatePassword(password, passwordConfirmed)) return;

        // Si todas las validaciones pasaron, continuar con el registro del usuario
        const user = {
            numIdentification: dni,
            firstName: nombre,
            lastName: apellidos,
            email: correo,
            phone: celular,
            birthDate: fechaNacimiento,
            password: password
        };

        try {
            const response = await fetch('http://localhost:8080/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Registration failed');
            }

            console.log(response.body);
            alert('Usuario registrado correctamente.');
            window.location.href = './';

        } catch (error) {
            setErrorMessage('Error en el registro: ' + error.message);
        }
    };

    // Funciones auxiliares para validar cada campo
    const validateDni = (documentType, dni) => {
        if (!dni) {
            setErrorMessage('El número de documento es obligatorio.');
            return false;
        } else if (documentType === 'DNI' && !/^\d{8}$/.test(dni)) {
            setErrorMessage('El DNI debe tener 8 dígitos.');
            return false;
        } else if (documentType === 'Carnet de Extranjeria' && !/^[a-zA-Z0-9]{9}$/.test(dni)) {
            setErrorMessage('El Carnet de Extranjería debe tener 9 caracteres alfanuméricos.');
            return false;
        }
        return true;
    };

    const validateNombre = (nombre) => {
        if (!nombre) {
            setErrorMessage('El nombre es obligatorio.');
            return false;
        }
        return true;
    };

    const validateApellidos = (apellidos) => {
        if (!apellidos) {
            setErrorMessage('Los apellidos son obligatorios.');
            return false;
        }
        return true;
    };

    const validateCorreo = (correo) => {
        if (!correo) {
            setErrorMessage('El correo es obligatorio.');
            return false;
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo)) {
            setErrorMessage('El formato del correo electrónico no es válido.');
            return false;
        }
        return true;
    };

    const validateCelular = (celular) => {
        if (!celular) {
            setErrorMessage('El celular es obligatorio.');
            return false;
        } else if (!/^\d{9}$/.test(celular)) {
            setErrorMessage('El celular debe tener 9 dígitos.');
            return false;
        }
        return true;
    };

    const validateFechaNacimiento = (fechaNacimiento) => {
        if (!fechaNacimiento) {
            setErrorMessage('La fecha de nacimiento es obligatoria.');
            return false;
        } else if (!isValidAge(fechaNacimiento)) {
            setErrorMessage('Debes ser mayor o igual a 18 años.');
            return false;
        }
        return true;
    };

    const validatePassword = (password, passwordConfirmed) => {
        if (!password) {
            setErrorMessage('La clave web es obligatoria.');
            return false;
        } else if (password.length < 6) {
            setErrorMessage('La clave web debe tener al menos 6 caracteres.');
            return false;
        } else if (password !== passwordConfirmed) {
            setErrorMessage('Las claves no coinciden.');
            return false;
        }
        return true;
    };


    const isValidAge = (fechaNacimiento) => {
        const today = new Date();
        const birthDate = new Date(fechaNacimiento);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            return age - 1 >= 18;
        }

        return age >= 18;
    };




    return (
        <div className='registro__container'>
            <div className='registro__card'>
                <img src={logo} alt="logo" className='registro__logo' />
                <form className='form__registro' id="registro" onSubmit={validateForm}>
                    <div>
                        <select name="document-type" required className='registro__documentType'>
                            <option value="DNI">DNI</option>
                            <option value="Carnet de Extranjeria">Carnet de Extranjeria</option>
                        </select>
                        <input type="text" name="dni" required placeholder="Número de documento" className='registro__dni' />
                        <input type="text" name="nombre" required placeholder="Nombres completos" className='registro__input' />
                        <input type="text" name="apellidos" required placeholder="Apellidos completos" className='registro__input' />
                        <input type="email" name="correo" required placeholder="Correo electrónico" className='registro__input' />
                        <div>
                            <input type="text" name="celular" placeholder="Celular" required className='registro__celular' />
                            <input type="text" name="fechaNacimiento" required placeholder="Fecha de nacimiento"
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => e.target.type = 'text'}
                                className='registro__fechaNacimiento' />
                        </div>

                        <input type="password" name="password" required placeholder="Clave web" className='registro__input' />
                        <input type="password" name="passwordConfirmed" required placeholder="Confirmar clave web" className='registro__input' />
                        <span className='registro__errorMessage' id="error-message">{errorMessage}</span>
                        <button type="submit" className='registro__boton'>Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
