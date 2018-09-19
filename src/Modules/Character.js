import React from 'react'

const Character = ({characters}) => {
    let CharList;
    if(characters !== null) {
      CharList = characters.map(char => {
        return <div className='character-card' key={char.name}>{char.name}</div>
      })
    }
    return (
        <div className='character-list'>{CharList}</div>
    )
}

export default Character
