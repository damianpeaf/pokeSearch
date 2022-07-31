import { FC, useMemo } from 'react'
import { PokemonTypesName } from '../../interfaces/Pokemon'

interface PokemonTypeProps {
    name: PokemonTypesName
}



export const PokemonType: FC<PokemonTypeProps> = ({ name }) => {

    return (
        <div className={`text-white text-stroke font-bold  bg-${name} text-lg rounded-lg px-2`}>{name}</div>
    )
}
