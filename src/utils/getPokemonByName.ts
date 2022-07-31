import pokemonApi from "../api/pokemonApi"
import { Pokemon } from '../interfaces/Pokemon';

export const getPokemonByName = async (name: string) => {
    try {
        const { data } = await pokemonApi.get<Pokemon>(`/pokemon/${name.toLowerCase()}`);
        return data

    } catch (error) {
        return null
    }
}