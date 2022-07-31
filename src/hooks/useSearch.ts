import { ChangeEvent, useState } from "react"

export const useSearch = () => {

    const [pokemonName, setPokemonName] = useState('')

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPokemonName(event.target.value);
    }

    return {
        pokemonName,
        onInputChange
    }

}