import GameDeals from "./components/GameDeals";
import GameSearch from "./components/GameSearch";
import GameStores from "./components/GameStores";

function App() {
  return (
    <div className="App">
        <GameSearch />
        <GameStores />
        <GameDeals />
    </div>
  );
}

export default App;
