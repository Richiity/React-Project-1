import { useEffect, useState } from "react";
import "./StackingItem.css";

export default function StackingItem(props: {
  name: any;
  type: any;
  options: any;
  reset: boolean;
}) {
  const [score, setScore] = useState(0);
  const { reset } = props;
  useEffect(() => {
    if (reset) {
      setScore(0);
    }
  }, [reset]);

  let className = "counter";
  return (
    <div className="Itembox">
      {/* If score is 0 displays grey name, if not displays white name with score*/}
      {score === 0 ? (
        <p style={{ color: "grey" }}>
          {props.name} {score !== 0}
        </p>
      ) : (
        <p>
          {props.name}: {score}
        </p>
      )}
      {/* <AltCounter /> */}
      <div className={className}>
        <button onClick={() => setScore(score + 1)}>⬆️</button>
        <button onClick={() => setScore(score - 1)} disabled={score === 0}>
          ⬇️
        </button>
      </div>
    </div>
  );
}
