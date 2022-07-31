import { FC, ReactNode, useReducer } from 'react';
import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonContext, pokemonReducer } from './';

interface PokemonProviderProps {
    children: ReactNode
}

export interface PokemonState {
    loading: boolean;
    pokemon: Pokemon | null | undefined;
    showMore: boolean;
}


const Pokemon_INITIAL_STATE: PokemonState = {
    loading: false,
    pokemon: undefined,
    showMore: false
}



export const PokemonProvider: FC<PokemonProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(pokemonReducer, Pokemon_INITIAL_STATE)

    const startLoadingPokemon = () => {
        dispatch({
            type: 'start-loading-pokemon'
        });
    }

    const finishLoadingPokemon = (pokemon: Pokemon | null) => {
        dispatch({
            type: 'finish-loading-pokemon',
            payload: pokemon
        })
    }

    const showMoreInfo = () => {
        dispatch({
            type: 'more-info',
        })
    }

    return (
        < PokemonContext.Provider value={{
            ...state,
            startLoadingPokemon,
            finishLoadingPokemon,
            showMoreInfo
        }}>
            {children}
        </ PokemonContext.Provider>
    )
}