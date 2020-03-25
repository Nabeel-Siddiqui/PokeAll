import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

import { getPokemon, getAllPokemon } from './Pokemon.js'


import Nav from './Nav.js'
import PokeDex from './components/PokeDex.js'
import CatchPokemon from './components/CatchPokemon.js'
import PokeQuiz from './components/PokeQuiz.js'
import PokeBall from './components/PokeBall.js'
import MainPage from './MainPage.js'



function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  useEffect(() => {
    async function fetchData() {
      let data = await getAllPokemon(URL)
      await loadPokemon(data.results);
    }
    fetchData();
  }, [])


    const loadPokemon = async (data) => {
      let allPokemon = await Promise.all(data.map(async pokemon => {
        let pokemonList = await getPokemon(pokemon)
        return pokemonList
      }))
      setPokemonData(allPokemon);
    }

  return (
      <Router>
        <div className='App'>

          <Nav />

          <Route path='/' exact render={(props) => <MainPage {...props} pokemon={pokemonData.map(pokemon => pokemon)}/>}/>

          <Route path='/pokedex' render={(props) => <PokeDex {...props} pokemon={pokemonData.map(pokemon => pokemon)} />}/>

          <Route path='/pokeball' render={(props) => <PokeBall {...props} pokemon={pokemonData.map(pokemon => pokemon)} />}/>

          <Route path='/pokequiz' render={(props) => <PokeQuiz {...props} pokemon={pokemonData.map(pokemon => pokemon)} />}/>
          
          <Route path='/catchpokemon' render={(props) => <CatchPokemon {...props} pokemon={pokemonData.map(pokemon => pokemon)} />}/>

        </div>
      </Router>   
  )
}





export default App;