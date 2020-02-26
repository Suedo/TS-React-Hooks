import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { createStore, TStore } from "./store";

// https://blog.mselee.com/posts/2019/06/08/using-mobx-with-react-hooks-typescript/

export const StoreContext = React.createContext<TStore>({} as TStore);

const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;