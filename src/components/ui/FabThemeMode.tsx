import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useThemeMode } from '../../hooks'

export const FabThemeMode = () => {

    const { darkModeEnabled, toogleDarkMode } = useThemeMode();

    return (
        <div className='fixed bottom-2 right-2'>
            <button className="bg-slate-900 p-3 rounded-md" onClick={() => toogleDarkMode()}>

                {
                    darkModeEnabled
                        ? <MdLightMode size={30} className="text-yellow-400" />
                        : <MdDarkMode size={30} className="text-white" />
                }

            </button>
        </div>
    )
}
