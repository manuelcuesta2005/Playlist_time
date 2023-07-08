"use client";
import React, {Fragment, useState} from 'react';
import axios from 'axios';
import Playlist from '@/app/assets/img/escucha.png'
import logo from '@/app/assets/img/logo.png'
import Image from 'next/image';
import Input_Text from '@/app/components/forms/input_text';
import Button_primary from '@/app/components/forms/button_primary';
import '@/app/components/containers/contenedor-principal.css'


function Register() {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrena, setContrasena] = useState('')
    const [repecontrena, setRepetirContrasena] = useState('')

    const handleNombre = (e:string) => {
        setNombres(e)
    }
    const handleApellido = (e:string) => {
        setApellidos(e)
    }
    const handleEmail = (e:string) => {
        setCorreo(e)
    }
    const handleContrasena = (e:string) => {
        setContrasena(e)
    }
    const handleRepetirContrasena = (e:string) => {
        setRepetirContrasena(e)
    }

    const registrar = () =>{

        axios.post ("http://localhost:3001/Users",{

        Nombre: nombres,
        Apellido: apellidos,
        Correo: correo,
        Contrasena: contrena
        }).then ((response)=> {
            alert("Se ha registrado de forma correcta")
        })

    }

    

  return (
    <div className='container'>
      <div className='marca'>
        <Image src={Playlist} alt={'Logo'} className="playlist"/>
        <h1 className='titulo'>Playlist Time</h1>
      </div>
      <div className='contenedor-principal offset-md-7'>
        <Image src={logo} alt={'Logo'} className='offset-md-5 mt-4'/>
        <form className='mt-3 text-center'>
          <Input_Text id='nombre' hint='Nombre' type='text' handleInput={handleNombre} />
          <Input_Text id='apellido' hint='Apellido' type='text' handleInput={handleApellido} />
          <Input_Text id='correo' hint='Correo electronico' type='email' handleInput={handleEmail} />
          <Input_Text id='new_pass' hint='Crear contraseña' type='password' handleInput={handleContrasena} />
          <Input_Text id='confirm_pass' hint='Confirmar contraseña' type='password' handleInput={handleRepetirContrasena} />
          <Button_primary texto='Registrar' callBack={registrar}/>
        </form>
      </div>
    </div>
  )
 
}

export default Register;