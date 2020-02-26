import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import HookName from './components/useState/HookName'
// import HookArray from './components/useState/HookArray'
// import HookMouse from './components/useEffect/HookMouse'
// import MouseContainer from './components/useEffect/MouseContainer'
// import IntervalCounter from './components/useEffect/IntervalCounter'
import DataFetchingV2 from "./components/useEffect/DataFetchingV2";
import Parent from "./components/useContext/Parent";
import { CitiesHeader, CitiesList, CitiesForm } from "./MobX/components/city";
import StoreProvider from "./MobX/Context";

export const UserContext = React.createContext<string>("");

const App: React.FC = () => {
  return (
    // <div className="App">
    //   Hello!
    //   <DataFetchingV2 />
    //   <UserContext.Provider value={"Somjit"}>
    //     <Parent />
    //   </UserContext.Provider>
    // </div>

    <StoreProvider>
      <div className="App">
        <header className="App-Header" />
        <CitiesHeader />
        <CitiesList />
        <CitiesForm />
      </div>
    </StoreProvider>
  );
};
export default App;
