import React from 'react';
import pokemons from './pokemonlist';
import Pokedex from './pokedex';
import { choice } from "./helpers";

class Pokegame extends React.Component {
  render() {
    const pokemonCopy = pokemons.slice(0);
    const seperatedPokemon = this.seperateHalf(pokemonCopy);
    const teamOne = seperatedPokemon[0];
    const teamTwo = seperatedPokemon[1];
    const teamOneWins = this.isTeamOneWinner(teamOne, teamTwo);

    return (
      <div>
        <Pokedex pokemon={teamOne} iswinner={teamOneWins} />
        <Pokedex pokemon={teamTwo} iswinner={!teamOneWins} />
      </div>
    );
  }

  seperateHalf(pokemonArr) {
    let pokeLength = Math.floor(pokemonArr.length / 2);
    let halfArr = [];
    let counter = 0;

    while (counter < pokeLength) {
      let randomPokemon = choice(pokemonArr);
      halfArr.push(randomPokemon[0]);
      pokemonArr.splice(randomPokemon[1], 1);
      counter++;
    }

    return [halfArr, pokemonArr];

  }

  isTeamOneWinner(pokemonArr1, pokemonArr2) {
    let sum1 = 0;
    let sum2 = 0;

    pokemonArr1.forEach(poke => sum1 += poke.base_experience);
    pokemonArr2.forEach(poke => sum2 += poke.base_experience);

    return (sum1 >= sum2);
  }
}

export default Pokegame