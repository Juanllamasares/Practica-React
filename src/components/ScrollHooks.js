import React,{useState,useEffect} from "react";

export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        //console.log("Fase de Actualizacion");

        const detectarScroll = ()=> setScrollY(window.pageYOffset);

        window.addEventListener("scroll",detectarScroll);
    },[]);
    
    return(
        <>
            <h2>Hooks - useEffect</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    )
}