"use client";
import React, { Fragment } from "react";
import './css/input_file.css';

function Input_file (props: { id: string, handleInput: any}) {

    return(
            <input type='image' className="Inputfile" name={props.id} id={props.id} onChange={e=>props.handleInput(e.target.value,e.target.name)}/>
    )
}

export default Input_file