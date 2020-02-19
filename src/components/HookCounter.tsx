import React, { useState } from "react";

const HookCounter: React.FC = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};

export default HookCounter;