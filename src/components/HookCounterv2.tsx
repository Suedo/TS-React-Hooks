import React, { useState } from "react";

// https://www.youtube.com/watch?v=d0plTCQgsXs&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=3
const HookCounterv2: React.FC = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const inc5 = () => {
    for (let i = 0; i < 5; i++) {
      // won't work, reads stale 'count' updates by 1 only
      // setCount(count + 1)
      // solution: 
      // when you have to update state based on the previous state value, pass in a function to the state setter
      setCount(count => count + 1); 
    }
  };

  const inc10 = () => {
    setCount(count + 10);
  };

  return (
    <div>
      Count: {count}
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>increment Count</button>
      <button onClick={() => setCount(count - 1)}>decrement Count</button>
      <button onClick={inc5}>Increment by 5</button>
      <button onClick={inc10}>Increment by 10</button>
    </div>
  );
};

export default HookCounterv2;
