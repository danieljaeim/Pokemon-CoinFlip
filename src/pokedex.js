import React from 'react';
import Pokecard from './pokecard';

class Pokedex extends React.Component {
  render() {

    return (
    <div>
      <ul>
          { this.props.pokemon.map(poke => <Pokecard name={poke.name} type={poke.type} pokeid={poke.id} exp={poke.base_experience}/>) }
      </ul>
      <p> { this.props.iswinner ? 'THIS HAND WINS!' : 'THIS HAND LOSES!' } </p>
    </div>
    )
  }
}

export default Pokedex