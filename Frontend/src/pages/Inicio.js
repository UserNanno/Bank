import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Inicio.css';
import logo from '../images/logo.png';

export default function Inicio() {
    const [documentType, setDocumentType] = useState('DNI');
    const [dni, setDni] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const validateForm = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        let valid = true;

        if (!dni) {
            setErrorMessage('El número de documento es obligatorio.');
            valid = false;
        } else if (!isValidDNI(documentType, dni)) {
            setErrorMessage('El número de documento no es válido.');
            valid = false;
        }

        if (!password) {
            setErrorMessage('La clave web es obligatoria.');
            valid = false;
        }

        if (valid) {
            try {
                const user = await loginUser(dni, password);
                console.log(user);
                storeUserData(user);
                navigate('/menu');
            } catch (error) {
                setErrorMessage('Error en el inicio de sesión: ' + error.message);
            }
        }
    };

    const isValidDNI = (documentType, dni) => {
        return (documentType === 'DNI' && /^\d{8}$/.test(dni)) ||
            (documentType === 'Carnet de Extranjeria' && /^[a-zA-Z0-9]{9}$/.test(dni));
    };

    const loginUser = async (dni, password) => {
        const response = await fetch('http://localhost:8080/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numIdentification: dni,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    };

    const storeUserData = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('userId', user.id);
        //localStorage.setItem('userPassword', user.password);
    };



    return (
        <div className='login__container'>
            <div className='login__card'>
                <img src={logo} alt="logo" className='login__logo' />
                <form onSubmit={validateForm} className='form__login'>
                    <div>
                        <select
                            name="document-type"
                            value={documentType}
                            onChange={(e) => setDocumentType(e.target.value)}
                            className='login__documentType'
                            required
                        >
                            <option value="DNI">DNI</option>
                            <option value="Carnet de Extranjeria">Carnet de Extranjeria</option>
                        </select>

                        <input
                            type="text"
                            name="dni"
                            placeholder="Número de documento"
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                            className='login__dni'
                            required
                        /><br />
                    </div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Clave web"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='login__password'
                        required
                    /><br />

                    <span className='login__errorMessage'>{errorMessage}</span>

                    <button type="submit" className='login__ingresar'>Ingresar</button>
                    <br />

                    <button type="button" onClick={() => navigate('/registro')} className='login_registrar'>Registrar</button>
                    <br />
                </form>
            </div>
        </div>
    );
}
