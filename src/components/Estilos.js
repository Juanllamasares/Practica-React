import React from "react";
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";
import "./Estilos.scss";

export default function Estilos(){
    let myStyles = {
        margin:"2rem",
        borderRadius:".25rem"
    }
    return(
        <>
            <section>
                <h2>Estilos CSS en React</h2>
                <h3 className="bg-react">Estilos en hoja CSS externa</h3>
                <h3 className="bg-react" style={{borderRadius:".25rem",margin:"1rem"}}>Estilos en linea CSS (atributo)</h3>
                <h3 className="bg-react" style={myStyles}>Estilos en linea CSS</h3>
                <h3 className="bg-react" style={myStyles}>Agregar Normalice en index.css con @import-normalize</h3>
                <h3 className={moduleStyles.error} style={myStyles}>Estilos con modulos</h3>
                <h3 className={moduleStyles.success} style={myStyles}>Estilos con modulos</h3>
                <h3 className="bg-sass">Estilos con SASS</h3>
            </section>
        </>
    );
}