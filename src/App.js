import React from "react";
import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHook from "./components/RelojHook";
import AjaxHooks from "./components/ajaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import StyledComponents from "./components/StyledComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
        <Componente msg="hola soy una prop funcion"/>
        <hr/>
        <Propiedades 
          cadena="Esto es una cadena de texto" 
          numero={20} 
          boolean={true}
          arreglo = {[1,2,3]}
          objeto = {{nombre:"juan",apellido:"llamasares"}}
          function = {num=>num*num}
          elementoReact = {<i>Esto es un elemento React</i>}
          componenteReact = {<Componente msg="componente pasado por prop"/>}
        />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <Padre/>
        <hr/>
        <CicloVida/>
        <hr/>
        <AjaxApis/>
        <hr/>
        <ContadorHooks titulo="seguidores"/>
        <hr/>
        <ScrollHooks/>
        <hr/>
        <RelojHook/>
        <hr/>
        <AjaxHooks/>
        <hr/>
        <HooksPersonalizados/>
        <hr/>
        <Referencias/>
        <hr/>
        <Formularios/>
        <hr/>
        <Estilos/>
        <hr/>
        <StyledComponents/>
        <hr/>
      </section>
      </header>
    </div>
  );
}

export default App;
