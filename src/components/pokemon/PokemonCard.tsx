import { FC } from "react";
import { Pokemon } from '../../interfaces/Pokemon';
import { usePokemon } from "../../hooks";
import { MoreInfo } from './MoreInfo';


interface PokemonCardProps {
    pokemon: Pokemon
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {

    const { showMore, showMoreInfo } = usePokemon();

    return (
        <>
            <article className="w-5/6 flex flex-col bg-slate-300 dark:bg-slate-900 rounded-lg p-3">
                {/* Nombre */}
                <h2 className="text-black dark:text-white text-2xl font-extrabold uppercase italic text-center">{pokemon.name}</h2>

                {/* Imagen */}
                <div className="flex justify-center my-4">
                    <img src={
                        (pokemon.sprites.other?.dream_world.front_default)
                            ? pokemon.sprites.other.dream_world.front_default
                            : pokemon.sprites.front_default
                    } alt={pokemon.name} className="" />
                </div>


                {
                    !showMore
                        ? <button onClick={() => showMoreInfo()} className="w-1/2 mx-auto rounded-lg text-white px-4 bg-indigo-600 text-lg">More Info ...</button>
                        : <></>
                }


            </article>
            {
                showMore
                    ? <MoreInfo pokemon={pokemon} />
                    : <></>
            }

        </>
    )

}
