import React, { useState, useEffect } from "react";

const HookOne = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log('UseEffect: Updating document Title');    
    document.title = `Clicked ${count} times`;
  }, [count]); // only render when 'count' changes

  return (
    <div>
      Count: {count}
      <br />
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>increment Count</button>
    </div>
  );
};

export default HookOne;
