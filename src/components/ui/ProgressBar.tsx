
interface ProgressBarProps {
    progress: number,
    name: string
}

export const ProgressBar = ({ progress, name }: ProgressBarProps) => {

    const wd = `${progress / 200 * 100}%`;

    return (
        <>
            <h3 className="text-black w-full dark:text-white text-xl uppercase mt-3 mb-2 ">{name}</h3>

            <div className="w-full h-4 rounded-2xl bg-[#BC8EE9] dark:bg-[#1F0A33]  mb-3 relative">
                <div
                    style={{
                        'width': wd
                    }}
                    className="dark:bg-[#9750DD] bg-[#7828C8]  shadow-md shadow-[#9750DD] h-full rounded-2xl relative"
                >
                    <div className="absolute text-white right-1 ">{progress}pts</div>
                </div>
                <div className="absolute dark:text-white right-1 text-black ">200pts</div>
            </div>
        </>
    )
}
