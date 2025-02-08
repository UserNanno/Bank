import React from 'react'
import '../styles/CardMenu.css'

function CardMenu({imagen, titulo, descripcion, ruta}) {
  return (
    <div className='card__menu'>
            <img src={require(`../images/${imagen}`)}   alt="Gestionar cuenta" />
            <div>
                <h3>{titulo}</h3><br/>
                <p>{descripcion}</p><br/>
                <a href={ruta}  className="button">Ver más →</a>
            </div>

    </div>
  )
}

export default CardMenu
