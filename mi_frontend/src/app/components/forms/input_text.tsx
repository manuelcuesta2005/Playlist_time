"use client";
import React, { Fragment } from 'react';
import './css/input_text.css';

function Input_Text (props: {hint: string , type: string, id: string, handleInput: any}) {

    return(
            <input type={props.type} className="InputText" placeholder={props.hint} name={props.id} id={props.id} onChange={e=>props.handleInput(e.target.value,e.target.name)}/>
    )
}

export default Input_Text