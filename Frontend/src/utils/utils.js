export function getUserLocalData() {
    // Obtiene el usuario local
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
}



export async function updateUserLocalData() {
    const userId = localStorage.getItem('userId');
    const url = 'http://localhost:8080/api/user/' + userId;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Error al obtener los datos del usuario');
    }
    const user = await response.json();
    localStorage.setItem('user', JSON.stringify(user));

}

export function populateAccountSelect(operacion) {
    const user = getUserLocalData();

    if (user && user.bankAccounts) {
        const accountSelect = document.getElementById('accountSelect');

        // Limpiar las opciones existentes
        accountSelect.innerHTML = '';

        user.bankAccounts.forEach(account => {
            const option = document.createElement('option');
            option.value = account.id;
            option.textContent = `Cuenta: ${account.accountNumber} - Saldo: ${account.balance} - Estado: ${account.status}`;

            switch (operacion) {
                case 1: // suspender
                    if (account.status === 'ACTIVE') {
                        accountSelect.appendChild(option);
                    }
                    break;
                case 2: // reactivar
                    if (account.status === 'SUSPENDIDA') {
                        accountSelect.appendChild(option);
                    }
                    break;
                case 3: // cerrar
                    if (account.status === 'ACTIVE' || account.status === 'SUSPENDIDA') {
                        accountSelect.appendChild(option);
                    }
                    break;
                default:
                    console.error('Operación no válida.');
                    break;
            }
        });
    } else {
        console.error('No se encontraron cuentas bancarias para el usuario.');
    }
}

export async function updateCuenta(numeroCuenta, nuevoStatus) {

    const url = 'http://localhost:8080/api/bankAccount/' + numeroCuenta;
    //alert(numeroCuenta);
    const data = {
        "status": nuevoStatus
    };

    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!response.ok) {
        throw new Error('Error al suspender la cuenta');

    }
    else {
        console.log('Cuenta actualizada exitosamente');
        await updateUserLocalData();
    }
}