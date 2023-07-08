"use client";
import React, {Fragment, useState} from 'react';
import '../app/components/containers/grid.css'
import Input_Text from '../app/components/forms/input_text';
import Input_file from '@/app/components/forms/input_file';
import Button_primary from '../app/components/forms/button_primary';
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
import axios from 'axios';
import Input_Audio from '@/app/components/forms/input_audio';


function holamundo(){
  alert("Se ha registrado la canción correctamente")
}

export default function Home() {
  
  const [name_song, setname_song] = useState('')
  const [artista, setartista] = useState('')
  const [album, setalbum] = useState('')
  const [duracion, setduracion] = useState('')
  const [selectedAudio, setSelectedAudio] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImage = (e:any) => {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
     };

    const handleAudio = (e:any) =>{
      const file_audio = e.target.files[0];
      setSelectedAudio(URL.createObjectURL(file_audio))
    }


    const handleNameSong = (e:string) => {
      setname_song(e)
     }
    const handleArtist = (e:string) => {
      setartista(e)
    }
    const handleAlbum = (e:string) => {
      setalbum(e)
    }
    const handleDuracion = (e:string) => {
      setduracion(e)
    }

    const add_song = () =>{
      axios.post("http://localhost:3001/Songs",{
          Titulo: name_song,
          Artista: artista,
          Album: album,
          Duracion: duracion,
          Portada: selectedImage,
          Audio: selectedAudio
      })
    }

  return (

    <div className='grid'>
        <div className='barra-navegacion div-1 '>
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
          <h3 className=''>Añadir Canción</h3>
        </div>

        <div className='contenedor-home div-3'>
          <div className='row'>
            <div className='col'>
              <div className='image-album'>

              <Input_file id={'Image'} handleInput={handleImage}/>
              {selectedImage && (
                <img src={selectedImage} alt="Imagen Seleccionada" />
              )}
                <Image src={Add} alt={'photo'} className='mt-5'/>
                <p className='pt-2'>Añadir foto</p>
              </div>
            </div>
            <div className='form-register'>
            <Input_Text type='text' hint='Nombre de la Cancion' id='name_song' handleInput={handleNameSong}/>
            <Input_Text type='text' hint='Artista' id='artist' handleInput={handleArtist}/>
            <Input_Text type='text' hint='Album' id='album' handleInput={handleAlbum}/>
            <Input_Text type='text' hint='Duracion' id='duracion' handleInput={handleDuracion}/>
            </div>
            <div className='load-file'>
            <Input_Audio id={'audio'} handleInput={handleAudio}/>
              {selectedAudio && (
                <audio src={selectedAudio} ></audio>
              )}

              <Image src={Frame} alt={'File'} className='mt-5'/>
              <p className='pt-3'>Subir Archivo(MP3, WAV, FLAC, etc...)</p>
            </div>
            <div className='buttons'>
            <Button_primary texto='Descartar' callBack={holamundo}/>
            <Button_primary texto='Registrar Canción' callBack={add_song}/>
            </div>
          </div>
        </div>
    </div>


  )
}