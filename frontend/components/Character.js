import React, { useState } from 'react'

function Character({ person }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false);
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };
  return (
    <div onClick={toggleHomeworld} className="character-card">
    <div className="card-body">
      <h3 className="character-name">{person.name}</h3>
      {showHomeworld && <p className="character-planet">Planet: {person.homeworld}</p>}
    </div>
  </div>
  )
}

export default Character
