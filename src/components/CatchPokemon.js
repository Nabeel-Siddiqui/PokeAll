import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../Pokemon.css'
import PokeTypeColors from '../PokeTypeColors.js'
import PokeBall from '../components/PokeBall.js'
import PokeQuiz from './PokeQuiz'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 


function CatchPokemon({ pokemon }) {

    const [catchPokemon, setCatchPokemon] = useState({})
    const [pokeDex, setPokeDex] = useState([])
    const URL = 'https://pokeapi.co/api/v2/pokemon/'

    
    useEffect(() => {
        catchRandomPokemon()
    }, [])

    const randomID = () => {
        return Math.floor(Math.random() * 151) + 1
    }

    const catchRandomPokemon = () => {
        axios
        .get (URL + randomID())
        .then(response => {
            setCatchPokemon(response.data)
        })
    }
    

    const pokeType = catchPokemon.types

    console.log(pokeType)

    return (
        <div className="pokecatch">
            <h1>Catch POKÈMON</h1>
        <div className="pokecatch-list">
            <div className="pokemon">
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + catchPokemon.id + ".png"}/>
                <div className="pokemon-name">
                    {catchPokemon.name}
                    {/* {catchPokemon.name.charAt(0).toUpperCase() + catchPokemon.name.slice(1)} */}
                </div>
                <button onClick={() => window.location.reload(false)}>New Pokemon</button>
                {/* <div className='border'style={{ backgroundColor: PokeTypeColors[pokemon.types[0].type.name]} }>
                    {catchPokemon.types[0].type.name}
                </div> */}
            </div>
        </div>
        </div>
    )
    
}

export default CatchPokemon

