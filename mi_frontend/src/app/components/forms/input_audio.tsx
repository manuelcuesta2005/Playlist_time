"use client";
import React, { Fragment } from "react";
import './css/input_Audio.css';

function Input_Audio (props: { id: string, handleInput: any}) {

    return(
            <input type='file' className="InputAudio" name={props.id} id={props.id} onChange={e=>props.handleInput(e.target.value,e.target.name)}/>
    )
}

export default Input_Audio