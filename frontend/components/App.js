import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [data, setData] = useState({ planets: null, people: null });

    useEffect(() => {
        Promise.all([axios.get(urlPlanets), axios.get(urlPeople)])
            .then((responses) => {
                const [planetsResponse, peopleResponse] = responses;
                setData({
                    planets: planetsResponse.data,
                    people: peopleResponse.data.map(person => ({
                        ...person,
                        homeworld: planetsResponse.data.find(planet => planet.id === person.homeworld).name
                    }))
                });
            })
            .catch((error) => {
                console.error('Something went wrong!', error);
            });
    }, []);
  return (
    <div>
        <h2>Star Wars Characters</h2>
        {data.people && data.people.map((person, index) => (
            <Character key={person.id} person={person} />
        ))}
    </div>
);
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
