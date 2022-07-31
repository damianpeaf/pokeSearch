import { FC } from 'react'

interface TitleProps {
    text: string
}

export const Title: FC<TitleProps> = ({ text }) => {
    return (
        <h1 className='text-4xl py-4 text-center text-black font-bold dark:text-white'>{text}</h1>
    )
}
