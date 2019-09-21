import React from 'react';

class Pokecard extends React.Component {
  render() {
    const poke_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokeid}.png`

    const typeColor = {
      'fire': 'orangered',
      'water': 'blue',
      'bug': 'green',
      'flying': 'purple',
      'electric': 'yellow',
      'normal' : 'pink',
      'poison': 'magenta',
    }

    let colorChange = {
      display: 'inline-block',
      margin: '30px',
      padding: '25px',
      borderRadius: '5px',
      backgroundColor: typeColor[this.props.type],
    }


    return (
    <div className='cardStyle' style={colorChange}>
      <p><h3>{ this.props.name }</h3></p>
      <img src={ poke_url } alt='this img' />
      <p>Type: { this.props.type }</p>
      <p>EXP: { this.props.exp }</p>
    </div >
    )
  }
}

export default Pokecard;