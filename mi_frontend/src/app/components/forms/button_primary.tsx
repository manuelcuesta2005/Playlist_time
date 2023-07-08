import React from "react";
import './css/button-primary.css';

const Button_primary = (props:{texto: string, callBack: Function}) =>{
    return(
        <button onClick={function(){props.callBack()}} className="Button-primary">{props.texto}</button>
    );
}

export default Button_primary;