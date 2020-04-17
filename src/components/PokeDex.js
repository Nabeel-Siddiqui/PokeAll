import React, {useState, useEffect} from 'react'

const PokeDex = ( { pokemon } ) => {
    
    const [allPokemon, setAllPokemon] = useState(pokemon);
    const [search, setSearch] = useState('');
    const [filterPokemon, setFilterPokemon] = useState([]);
    
    useEffect(() => {
        setAllPokemon(pokemon);
    }, [pokemon]);

    useEffect(() => {
        setFilterPokemon(
            allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search, allPokemon]);

    console.log(allPokemon.map(pokemon => pokemon.name))

    return (
        <div>
            <h1>POKÈDEX</h1>
            <form>
                <label>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
                </label>
            </form>
        </div>
    )
}

export default PokeDex
