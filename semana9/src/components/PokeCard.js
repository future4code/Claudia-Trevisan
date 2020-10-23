import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  const takePoke = (pokeName) => {
    const request = Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

    request
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    takePoke(props.pokemon);
  }, [props.pokemon]);

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}
