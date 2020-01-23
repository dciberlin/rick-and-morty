import React from 'react';
import grumpy from '../statics/grumpy.jpeg';
const Character = props => {
  const { name, image } = props.data;

  return (
    <div className="character">
      {image ? <img src={image} alt={name} /> : <img src={grumpy}></img>}
      <p>{name}</p>
    </div>
  );
};

export default Character;
