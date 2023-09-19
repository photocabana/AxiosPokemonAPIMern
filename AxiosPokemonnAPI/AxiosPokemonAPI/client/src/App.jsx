import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [pokeApiData, setPokeApiData] = useState([])
  useEffect(() => {axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => {console.log(response.data.results)
      setPokeApiData(response.data.results)})
    .catch(error => console.log(error))
}, [])
  return (
    <div className='App'>
      <h1>Axios Pokemon API</h1>
      <h3>Gotta Catch Them ALL...</h3>
      <ul>
        {pokeApiData.map((pokemon, idx) => (
          <li key={idx}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
