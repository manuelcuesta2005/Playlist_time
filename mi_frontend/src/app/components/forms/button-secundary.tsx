import React from "react";
import './css/button-secundary.css';

const Button_secundary = (props:{texto: string, callBack: Function}) =>{
    return(
        <button onClick={function(){props.callBack()}} className="Button-secundary">{props.texto}</button>
    );
}

export default Button_secundary;