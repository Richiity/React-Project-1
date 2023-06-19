import { useEffect, useState } from "react";
import "./App.css";
import gameData from "./gameData.json";
import GameSelector from "./GameSelector";
import ItemList from "./ItemList";
import ResetButton from "./Reset";

interface GameItem {
  name: string;
  type: string;
  options?: string[];
}

function App() {
  const [Game, setGame] = useState("");
  const [Items, setItems] = useState<GameItem[]>([]);
  const [hasItem, setHasItem] = useState(false);
  const [Reset, setReset] = useState(false);

  useEffect(() => {
    const game = gameData.find((game) => game.gameName === Game);

    setItems(game ? game.items : []);
  }, [Game]);

  const toggleHasItem = () => {
    setHasItem((state) => !state);
  };

  return (
    <div className="App">
      <header className="App-header">
        <GameSelector Game={Game} setGame={setGame} />
        <ItemList
          Items={Items}
          hasItem={hasItem}
          toggleHasItem={toggleHasItem}
          game={Game}
          setReset={setReset}
          reset={Reset}
        />
        {Game && <ResetButton setReset={setReset} />}
      </header>
    </div>
  );
}

export { App };
export type { GameItem };
