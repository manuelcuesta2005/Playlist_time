"use client";
import { ImageResponse } from 'next/server';
import logo from './img/logo.png'

export default function Imagenes(){
    return{
        'logo' : logo
    }
}

