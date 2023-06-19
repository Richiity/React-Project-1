import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import "./ExclusiveItem.css";

interface Props {
  baseItem: string;
  reset: boolean;
  itemElem: string[];
}

function ExclusiveItem(props: Props) {
  const [Item, setItem] = useState("");
  const { reset } = props;

  useEffect(() => {
    if (reset) {
      setItem("");
    }
  }, [reset]);

  return (
    <div className="ExclusiveItembox">
      {Item === "" ? <p>{props.baseItem}</p> : <p>{Item}</p>}
      <FormControl size="medium">
        <InputLabel id="select-label" sx={{ color: "black !important" }}>
          Select
        </InputLabel>
        <Select
          sx={{
            width: 200,
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
          id="select"
          labelId="select-label"
          label="Select"
          value={Item ? Item : "None"}
          onChange={(event) => setItem(event.target.value)}
        >
          <MenuItem value="">None</MenuItem>
          {props.itemElem.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default ExclusiveItem;
