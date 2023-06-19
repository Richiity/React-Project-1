import gameData from "./gameData.json";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

interface GameStuff {
  Game: string;
  setGame: (e: any) => void;
}

function GameSelector(props: GameStuff) {
  const { Game, setGame } = props;

  return (
    <FormControl size="medium">
      <InputLabel id="game-select-label" sx={{ color: "black !important" }}>
        Game
      </InputLabel>
      <Select
        sx={{
          width: 300,
          marginBottom: 2,
          color: "black",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          ".MuiSvgIcon-root ": {
            fill: "black !important",
          },
          "& .MuiSvgIcon-root": {
            color: "black",
          },
        }}
        id="game-select"
        labelId="game-select-label"
        label="Game"
        value={Game}
        onChange={(event) => setGame(event.target.value)}
      >
        {gameData.map((game) => (
          <MenuItem key={game.gameName} value={game.gameName}>
            {game.gameName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default GameSelector;

//{JSON.stringify(item.options![0])}
// how to see the first elem in options
//<p>This is the object {JSON.stringify(item)}</p>
