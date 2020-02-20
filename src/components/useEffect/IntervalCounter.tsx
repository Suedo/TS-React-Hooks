import React, { useState, useEffect } from "react";

const IntervalCounter = () => {
  const [count, setCount] = useState(0);
  const tick = () => {
    // setCount(count + 1); // this method needs 'count' in the dependency list for useState to watch over
    setCount(prevCount => prevCount + 1) // no dependency list needed in useEffect
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  // }, [count]); // needed when setCount doesnt remember previous state
  }, []); // when setCount remembers previous state, useEffect doesnt need to watch over count

  return <div>{count}</div>;
};

export default IntervalCounter;
