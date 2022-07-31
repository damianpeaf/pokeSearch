import { FC } from 'react'
import { GiWeight } from 'react-icons/gi'
import { Pokemon } from '../../interfaces/Pokemon'
import { ProgressBar } from '../ui/ProgressBar'
import { PokemonColors } from './PokemonColors'
import { PokemonType } from './PokemonType'

interface PokemonInfoProps {
    pokemon: Pokemon
}

export const MoreInfo: FC<PokemonInfoProps> = ({ pokemon }) => {
    return (
        <article className="w-5/6 flex flex-col bg-slate-300 dark:bg-slate-900 rounded-lg p-3">
            {/* Tipo */}
            <h2 className="text-black dark:text-white text-2xl font-bold italic text-center mt-10 mb-6">Types:</h2>

            <PokemonColors />
            <div className="flex justify-center gap-2">
                {
                    pokemon.types.map(({ type }) => (
                        <PokemonType key={type.name} name={type.name} />
                    ))
                }
            </div>


            {/* Peso */}
            <h2 className="text-black dark:text-white text-2xl font-bold italic text-center mt-10 mb-6">Weight:</h2>
            <div className="flex  flex-col justify-center items-center">
                <div>
                    <GiWeight size={90} className="text-black dark:text-white" />
                </div>
                <p className="text-2xl font-bold  text-black dark:text-white">{`${pokemon.weight / 10}`}</p>
            </div>


            {/* Stats */}
            <h2 className="text-black dark:text-white text-2xl font-bold italic text-center mt-10 mb-2">Stats:</h2>
            <div className="flex  flex-col justify-center items-center">
                {
                    pokemon.stats.map((stat) => (
                        <ProgressBar key={stat.stat.name} name={stat.stat.name} progress={stat.base_stat} />
                    ))
                }
            </div>


            {/* Sprites */}

            <h2 className="text-black dark:text-white text-2xl font-bold italic text-center mt-10 mb-2">Sprites:</h2>
            <div className="flex flex-wrap  justify-center items-center">
                {
                    pokemon.sprites.front_default
                        ? (
                            <>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                                <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
                            </>
                        )
                        : <></>
                }
            </div>

        </article>
    )
}
