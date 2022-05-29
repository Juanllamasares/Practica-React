import React, { useState, useEffect } from 'react';

export default function AjaxHooks(){

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async (url)=>{
            let res = await fetch(url),
            json = await res.json();
            
            json.results.forEach(el => {
                fetch(el.url)
                .then(res=>res.json())
                .then(json=>{
                    //console.log(json);
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default
                    };
                    setPokemons((pokemons)=> [...pokemons,pokemon]);
                });
            });
        };
        let url = "https://pokeapi.co/api/v2/pokemon/";

        getPokemons(url);
    }, []);

    return(
        <>
            <h3>Peticiones asincronas en Hooks</h3>
            {pokemons.length === 0 ? <h3>Cargando</h3> : pokemons.map(el=><Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}
        </>
    );
};

function Pokemon({avatar,name}){
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}