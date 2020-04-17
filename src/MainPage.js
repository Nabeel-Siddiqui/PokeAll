import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Pokemon.css'
import PokeTypeColors from './PokeTypeColors.js'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 

function MainPage( { pokemon } ) {

    console.log(pokemon.map(pokemon => pokemon.types[0].type.name))

    return (
        <div className="pokedex">
            <h1>ONLY 151 POKÈMON</h1>
        <div className="pokedex-list">
            {pokemon.map(pokemon => { return ( 
            <div className="pokemon">
                <img src= {pokemon.sprites.front_default} className="sprite"/> 
                <div className="pokemon-name">
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </div>
                <div className='border'style={{ backgroundColor: PokeTypeColors[pokemon.types[0].type.name]} }>
                    {pokemon.types[0].type.name}
                </div>
            </div>
            )})} 
        </div>
        </div>
    )
}

export default MainPage
