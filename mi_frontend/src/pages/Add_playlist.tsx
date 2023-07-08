"use client";
import React, {Fragment, useState} from 'react';
import '../app/components/containers/grid.css'
import Input_Text from '../app/components/forms/input_text';
import Button_primary from '../app/components/forms/button_primary';
import Button_secundary from '../app/components/forms/button-secundary';
import '../app/components/containers/container-register.css'
import Image from 'next/image';
import logo from '../app/assets/img/logo.png'
import reproducidos from '../app/assets/img/reproducido.png'
import list from '../app/assets/img/list.png'
import tendencias from '../app/assets/img/tendencias.png'
import search from '../app/assets/img/search.png'
import exit from '../app/assets/img/exit.png'
import Add from '../app/assets/img/Add.png'
import Frame from '../app/assets/img/Frame.png'


function holamundo(){
  alert("Se ha registrado la canción correctamente")
}

export default function Home() {
  return (

    <div className='grid'>
        <div className='barra-navegacion div-1'>
          <Image src={logo} alt={'logo'} />
          <div className='pt-5'>
          <Image src={reproducidos} alt={'list'} className='mt-2 mb-4'/>
          <Image src={list} alt={'playlist'} className='mb-4'/>
          <Image src={tendencias} alt={'trending'} className='mb-4'/>
          <Image src={search} alt={'search'} className='mb-5'/>
          <Image src={exit} alt={'exit'} className='mt-5'/>
          </div>
        </div>

        <div className='information div-2'>
          <h3 className=''>Crear Playlist</h3>
        </div>

        <div className='contenedor-home div-3'>
          <div className='row'>
            <div className='col'>
              <div className='image-album'>
                <Image src={Add} alt={'photo'} className='mt-5'/>
                <p className='pt-2'>Añadir foto</p>
              </div>
            </div>
            <div className='form-register'>
            <Input_Text type='text' hint='Nombre de la Playlist' id='name_playlist'/>
            <Input_Text type='text' hint='Descripcion' id='playlist_description'/>
            </div>
            <div className='load-file'>
              <Image src={Frame} alt={'File'} className='mt-5'/>
              <p className='pt-3'>Selecciona las canciones que desea agregar a la playlist</p>
            </div>
            <div className='buttons'>
            <Button_secundary texto='Descartar' callBack={holamundo}/>
            <Button_primary texto='Guardar Álbum' callBack={holamundo}/>
            </div>
          </div>
        </div>
    </div>


  )
}