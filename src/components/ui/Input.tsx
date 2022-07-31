import { ChangeEvent, FC } from "react"

interface InputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ value, onChange }) => {

    return (
        <input
            type="text"
            name="pokemonName"
            placeholder="Pokemon Name"
            value={value}
            onChange={(e) => onChange(e)}
            className="
            bg-slate-200
            dark:bg-slate-800
            px-4
            py-2

            text-black
            dark:text-white

            placeholder:text-gray-500
            dark:placeholder:text-gray-400
            rounded-tl-lg
            rounded-bl-lg
            "
            autoComplete="off"
        />
    )
}
