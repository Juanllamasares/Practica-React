import React,{useRef} from "react";

export default function Referencias(){

    //let refMenu = createRef() -> Para class components
    let refMenu = useRef(),
    refMenuBtn = useRef();

    const handleToggleMenu = ()=>{
        /*const $menu = document.getElementById("menu");

        if(e.target.textContent === "Menu"){
            e.target.textContent = "Cerrar";
            $menu.style.display = "block";
        }else{
            e.target.textContent = "Menu";
            $menu.style.display = "none";
        }*/

        if(refMenuBtn.current.textContent === "Menu"){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        }else{
            refMenuBtn.current.textContent = "Menu";
            refMenu.current.style.display = "none";
        }
        
    }

    return (
        <>
            <h2>Referencias</h2>

            <button ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>

            <nav ref={refMenu} style={{display:"none"}}>
                <a href="#">Section 1</a><br/>
                <a href="#">Section 2</a><br/>
                <a href="#">Section 3</a><br/>
                <a href="#">Section 4</a><br/>
                <a href="#">Section 5</a><br/>
            </nav>
        </>
    )
}