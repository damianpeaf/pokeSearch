import { useContext } from "react"
import { PokemonContext } from '../context/pokemon/pokemonContext';
import { getPokemonByName } from "../utils/getPokemonByName";

export const usePokemon = () => {
    const { startLoadingPokemon, finishLoadingPokemon, loading, pokemon, showMore, showMoreInfo } = useContext(PokemonContext);

    const searchPokemon = async (name: string) => {
        startLoadingPokemon();

        const pokemon = await getPokemonByName(name);

        finishLoadingPokemon(pokemon);
    }

    return {
        loading,
        pokemon,
        searchPokemon,
        showMore,
        showMoreInfo
    }

}