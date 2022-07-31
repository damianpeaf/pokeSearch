import React, { FC } from 'react'
import { GiWeight } from 'react-icons/gi'
import { Pokemon } from '../../interfaces/Pokemon'
import { PokemonType } from './PokemonType'

interface PokemonInfoProps {
    pokemon: Pokemon
}

export const MoreInfo: FC<PokemonInfoProps> = ({ pokemon }) => {
    return (
        // <article className="w-5/6 flex flex-col bg-slate-300 dark:bg-slate-900 rounded-lg p-3">
        <>
            {/* Tipo */}
            <h2 className="text-black dark:text-white text-2xl font-bold italic text-left mt-10 mb-6">Types:</h2>
            <div className="flex gap-2">
                {
                    pokemon.types.map((type) => (
                        <PokemonType name={type.type.name} />
                    ))
                }
            </div>


            {/* Peso */}
            <h2 className="text-black dark:text-white text-2xl font-bold italic text-left mt-10 mb-6">Weight:</h2>
            <div className="flex  flex-col justify-center items-center">
                <div>
                    <GiWeight size={90} className="text-black dark:text-white" />
                </div>
                <p className="text-2xl font-bold">{`${pokemon.weight / 10}`}</p>
            </div>
        </>
        // </article>
    )
}
