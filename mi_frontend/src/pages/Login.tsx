"use client";
import React, {Fragment, useState} from 'react';
import '../app/components/containers/contenedor-principal.css';
import Input_Text from '../app/components/forms/input_text';
import Button_primary from '../app/components/forms/button_primary';
import axios from 'axios';
import Image from 'next/image';
import Playlist from '../app/assets/img/escucha.png'
import logo from '../app/assets/img/logo.png'
import { useRouter } from 'next/router';


export default function Home() {
  //const router = useRouter();
  //  React.useEffect(()=>{
  //    if (sessionStorage.getItem("token")!==undefined){
  //      router.push("/productos")
  //    }

  //  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleInput(valor: string, name: string) {
    if (name === "correo") {
      setEmail(valor)
    } else {
      setPassword(valor)
    }
  }

  const SessionDataStorage = (valor: string, name:string) => {
    sessionStorage.setItem(name, valor);
  };


  const login = async () => {
    axios.post(`http://localhost:3001/autenticacion/login`, {
      correo: email,
      contrasena: password
    })
      .then(function (response) {
        SessionDataStorage(response.data.access_token, "token")
        SessionDataStorage(response.data.nombre, "nombre")
        //router.push("/usuarios")
      })
      .catch(function (error) {

      });
  }




  return (
    <div className='container'>
      <div className='marca'>
        <Image src={Playlist} alt={'Logo'} className="playlist"/>
        <h1 className='titulo'>Playlist Time</h1>
      </div>
      <div className='contenedor-principal offset-md-8'>
        <Image src={logo} alt={'Logo'} className='offset-md-5 mt-4'/>
        <form className='mt-5 text-center'>
          <div className='mt-4'>
          <Button_primary texto='Ingresar' callBack={login}/>
          </div>
        </form>
      </div>
    </div>
  )
}