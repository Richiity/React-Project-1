import React, { useState } from 'react';
import './AltCounter.css'

function AltCounter() {
    const [score, setScore] = useState(0);

    let className = 'counter';

    return (
        <div
            className={className}
        >
            {score !== 0 && <small>{score}</small>}
            <button onClick={() => setScore(score + 1)}>
                ⬆️
            </button>
            <button onClick={() => setScore(score - 1)} disabled={score === 0}>
                ⬇️
            </button>
        </div>
    );
}

export default AltCounter;