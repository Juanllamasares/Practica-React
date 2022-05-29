import React,{useState,useEffect} from "react";

export default function RelojHook(){

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let temporizador;

        if(visible){
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        }else{
            clearInterval(temporizador);
        }

        return ()=>{
                clearInterval(temporizador);
        }
        
    }, [visible])

    return(
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hora={hora}/>}
            <button onClick={()=>setVisible(true)}>Iniciar</button>
            <button onClick={()=>setVisible(false)}>Detener</button>
        </>
    );
}

function Reloj({hora}){
    return <h3>{hora}</h3>;
}