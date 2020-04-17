import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div className='menu'>
            <Link to='/allpokemon'>
                <li>All Pokemon</li>
            </Link> 

            <Link to='/pokedex'>
                <li>PokéDex</li>
            </Link> 

            <Link to='/pokeball'>
                <li>PokéBall</li>   
            </Link>

            <Link to='/pokequiz'>
                <li>PokéQuiz</li>
            </Link>

            <Link to='/catchpokemon'>
                <li>Catch Pokémon</li>
            </Link>
        </div>
    )
}
export default LandingPage