import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <nav>
            <Link to='/'><h3>Pokémon App</h3></Link>
            <ul className='nav-links'>

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
                
            </ul>
        </nav>
    )
}

export default Nav
