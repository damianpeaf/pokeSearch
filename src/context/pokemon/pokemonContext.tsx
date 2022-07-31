import { createContext } from 'react';
import { Pokemon } from '../../interfaces/Pokemon';

interface ContextProps {
    loading: boolean;
    pokemon: Pokemon | null | undefined;
    showMore: boolean;
    startLoadingPokemon: () => void;
    finishLoadingPokemon: (pokemon: Pokemon | null) => void;
    showMoreInfo: () => void;

}

export const PokemonContext = createContext({} as ContextProps);