import { GameItem } from "./App";
import BinaryItem from "./BinaryItem";
import ExclusiveItem from "./ExclusiveItem";
import Reset from "./Reset";
import StackingItem from "./StackingItem";

interface ItemListProps {
  game: string;
  Items: GameItem[];
  hasItem: boolean;
  reset: boolean;
  setReset: (e: boolean) => void;
  toggleHasItem: () => void;
}
function ItemList(props: ItemListProps) {
  const { Items, hasItem, toggleHasItem, game, setReset, reset } = props;

  reset && setReset(false);

  return (
    <div>
      {Items.map((item) => (
        <div>
          {item.type === "stacking" && (
            <StackingItem
              key={item.name}
              name={item.name}
              type={item.type}
              options={item.options}
              reset={reset}
            />
          )}
          {item.type === "binary" && (
            <BinaryItem
              key={item.name}
              itemName={item.name}
              inInventory={hasItem}
              onclick={toggleHasItem}
              reset={reset}
            />
          )}
          {item.type === "exclusive" && (
            <ExclusiveItem
              key={item.name}
              baseItem={item.name}
              itemElem={item.options!}
              reset={reset}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ItemList;
