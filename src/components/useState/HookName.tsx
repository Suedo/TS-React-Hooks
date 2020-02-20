import React, { useState } from "react";
interface Name {
  firstName: string;
  lastName: string;
}

const HookName = () => {
  const initialVal: Name = {
    firstName: "",
    lastName: ""
  };
  const [name, setName] = useState<Name>(initialVal);

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={e => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={e => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
};

export default HookName;
