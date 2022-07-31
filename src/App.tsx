import { FabThemeMode, PokemonGrid, SearchBar, Title } from "./components"

export const App = () => {

  return (
    <main className="dark:bg-black bg-slate-100 min-h-screen">
      <Title text="PokeSearch" />
      <SearchBar />
      <PokemonGrid />
      <FabThemeMode />
    </main>
  )
}

