import React, { useState, useEffect } from "react";

const HookOne = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // run this after every render
    document.title = `Clicked ${count} times`
  })

  return (
    <div>
      Count: {count}
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>increment Count</button>
    </div>
  );
};

export default HookOne;
