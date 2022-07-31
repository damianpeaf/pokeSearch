import { usePokemon } from '../../hooks/usePokemon';
import { PokemonCard } from './PokemonCard';
import Swal from 'sweetalert2';
import { LoaderSpinner } from '../ui/LoaderSpinner';

export const PokemonGrid = () => {
    const { loading, pokemon } = usePokemon();


    if (pokemon === undefined) {
        return (<p className="text-black dark:text-white text-center text-2xl mt-10">Search something ! </p>)
    }

    if (loading) {
        return <LoaderSpinner />
    }

    if (!pokemon) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha encontrado ningun pokemon',
        })
        return (<p className="text-black dark:text-white text-center text-2xl mt-10">Keep trying ... </p>)
    }

    return (
        <section className='flex flex-col xl:flex-row xl:items-start xl:gap-x-4 xl:px-5 justify-center items-center py-10 gap-y-10'>
            <PokemonCard pokemon={pokemon} />
        </section>
    )

}
