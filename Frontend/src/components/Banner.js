import React, { useEffect, useState } from 'react';
import '../styles/Banner.css';

function Banner() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userObject = JSON.parse(user);
      setUserName(userObject.firstName);
    }
  }, []);

  return (
    <div className="banner">
        <h1>¡Bienvenido, <span>{userName || 'usuario'}</span>!</h1>
        <p>Navega seguro en tu banca por internet</p>
    </div>
  );
}

export default Banner;
