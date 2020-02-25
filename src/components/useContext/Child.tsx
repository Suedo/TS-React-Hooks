import React, { useContext } from "react";
import { UserContext } from "../../App";

const Child = () => {
  const username = useContext(UserContext);
  return (
    <div>
      <h3>UseContext</h3>
      <p>{username}</p>
    </div>
  );
};

export default Child;
