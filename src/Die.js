import React from 'react';

function Die(props) {
  return <i className={`fas fa-dice-${props.face} ${props.rolling ? 'shaking' : ''}`}></i>
}

export default Die;