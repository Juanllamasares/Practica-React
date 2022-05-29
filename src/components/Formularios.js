import React, { useState } from 'react';

export default function Formularios(){
    /*const [nombre, setNombre] = useState("");
    const [sayayin, setSayayin] = useState("");
    const [opcionSayan, setOpcionSayan] = useState("");
    const [terminos, setTerminos] = useState(false);*/

    const [form, setForm] = useState({});

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleChecked = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked
        })
    }

    const manejarFormulario = (e)=>{
        e.preventDefault();
        alert("formulario enviado");
    }
    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={manejarFormulario}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange}/>

                <p>Elige tu sayayin favorito</p>

                <input type="radio" name= "sayayin" id="goku" value="goku" onChange={handleChange}/>
                <label htmlFor="goku">Goku</label>


                <input type="radio" name= "sayayin" id="vegueta" value="vegueta" onChange={handleChange}/>
                <label htmlFor="vegueta">Vegueta</label>


                <input type="radio" name= "sayayin" id="gohan" value="gohan" onChange={handleChange}/>
                <label htmlFor="gohan">Gohan</label>


                <input type="radio" name= "sayayin" id="trunks" value="trunks" onChange={handleChange}/>
                <label htmlFor="trunks">Trunks</label>

                <p>Elige un sayayin</p>
                <select name="sayayinSelect" onChange={handleChange} defaultValue="">
                    <option value=""></option>
                    <option value="goku">Goku</option>
                    <option value="vegueta">Vegueta</option>
                    <option value="gohan">Gohan</option>
                    <option value="trunks">Trunks</option>
                </select>
                <br/>
                <label htmlFor="terminos">Terminos y condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked}/>
                <br/>
                <input type="submit"/>

            </form>
        </>
    );
}