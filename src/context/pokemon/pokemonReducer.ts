import { Pokemon } from '../../interfaces/Pokemon';
import {
    PokemonState
} from './';

type UIActionType =
    | { type: 'start-loading-pokemon' }
    | { type: 'finish-loading-pokemon', payload: Pokemon | null }
    | { type: 'more-info' }


export const pokemonReducer = (state: PokemonState, action: UIActionType): PokemonState => {
    switch (action.type) {
        case 'start-loading-pokemon':
            return {
                ...state,
                loading: true,
                showMore: false,
                pokemon: null
            }

        case 'finish-loading-pokemon':
            return {
                ...state,
                loading: false,
                pokemon: action.payload
            }

        case 'more-info':
            return {
                ...state,
                showMore: true
            }

        default:
            return state;
    }
}