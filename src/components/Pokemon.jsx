import React, { useEffect, useState } from 'react';
const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    }, []);
    console.log(pokemon);
  return (
    <div>
        <div className='container'>
            <ol>
                {
                    pokemon.map((pokemon, i) => (
                        <div>
                            <li key={i}>{pokemon.name}</li>
                        </div>
                    ))
                }
            </ol>
        </div>
    </div>
  )
}

export default Pokemon