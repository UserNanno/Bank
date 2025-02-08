import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CardMenu from '../components/CardMenu'
import '../styles/Menu.css'

export default function Menu() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='cards__menu'>
        <CardMenu 
          imagen='gestionar_cuenta.png' 
          titulo='Gestionar cuenta'
          descripcion='Tener una cuenta nunca fue tan fácil. Apertura de cuenta y familiarízate de todo...'
          ruta='./gestionar-cuenta' />
        <CardMenu 
          imagen='transferencias.png'
          titulo='Realizar transferencias'
          descripcion='Realiza transferencias y aprovecha todas las opciones para gestionar tus finanzas de forma rápida ...' 
          ruta='./transferencias'/>
        <CardMenu 
          imagen='pago_tasas.png'
          titulo='Pagar servicios'
          descripcion='Realiza el pago de tus servicios de forma rápida y sencilla ...' 
          ruta='./pago-servicios'/>
      </div>
      <Footer></Footer>
    </div>
    
  )
}
