import React, { FC } from 'react'

interface PokemonTypeProps {
    name: string
}

export const PokemonType: FC<PokemonTypeProps> = ({ name }) => {
    return (
        <div className='text-black dark:text-white text-lg bg-red-200 rounded-lg px-2'>{name}</div>
    )
}
