import React from "react";
import Proptypes from "prop-types";

export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boolean?"Verdadero":"Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre +"-"+props.objeto.apellido}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.function).join(", ")}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );

}

Propiedades.defaultProps = {
    porDefecto: "Las Props"
};

Propiedades.propTypes = {
    numero:Proptypes.number
};