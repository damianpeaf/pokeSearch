import { ImSpinner9 } from 'react-icons/im'

export const LoaderSpinner = () => {
    return (
        <article className='w-full flex justify-center items-center min-h-[70vh]'>
            <ImSpinner9 size={90} className="text-indigo-600 animate-spin" />
        </article>
    )
}
