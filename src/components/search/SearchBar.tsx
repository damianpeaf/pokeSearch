import { Input } from "../"
import { useSearch } from "../../hooks"
import { FaSearchengin } from 'react-icons/fa'
import { usePokemon } from '../../hooks/usePokemon';
import Swal from "sweetalert2";
import { FormEvent } from "react";

export const SearchBar = () => {

    const { pokemonName, onInputChange } = useSearch();
    const { searchPokemon } = usePokemon();

    const handleSubmmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (pokemonName.length >= 1) {
            searchPokemon(pokemonName);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar el nombre de un pokemon',
            })
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmmit} className="flex justify-center items-center w-full ">
                <Input value={pokemonName} onChange={onInputChange} />

                <button className='
                bg-indigo-600
                h-[40px]
                p-2
                flex
                justify-center
                items-center
                text-white
                hover:text-gray-400
                rounded-tr-lg
                rounded-br-lg 
                '
                    type="submit"

                >
                    <FaSearchengin size={30} className="text-white hover:text-indigo-400 transition-colors" />
                </button>

            </form>
        </section>
    )
}
