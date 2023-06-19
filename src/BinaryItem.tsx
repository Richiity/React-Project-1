import { useEffect, useState } from "react";
import "./BinaryItem.css";

interface Props {
  itemName: string;
  inInventory: boolean;
  reset: boolean;
  onclick: () => void;
}

function BinaryItem(props: Props) {
  const text = props.inInventory ? "white" : "grey";
  const { reset } = props;

  const [textColor, setTextColor] = useState(text);
  useEffect(() => {
    if (reset) {
      setTextColor("grey");
    }
  }, [reset]);

  const toggleColor = () => {
    setTextColor(textColor === "grey" ? "white" : "grey");
  };
  return (
    <button
      className="BinaryBox"
      style={{ color: textColor }}
      onClick={toggleColor}
    >
      {props.itemName}
    </button>
  );
}

export default BinaryItem;
