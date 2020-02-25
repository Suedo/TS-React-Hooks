import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HookName from './components/useState/HookName'
// import HookArray from './components/useState/HookArray'
// import HookMouse from './components/useEffect/HookMouse'
// import MouseContainer from './components/useEffect/MouseContainer'
// import IntervalCounter from './components/useEffect/IntervalCounter'
import DataFetchingV2 from './components/useEffect/DataFetchingV2'


const App: React.FC = () => {
  return (
    <div className="App">
      Hello!
      <DataFetchingV2 />
    </div>
  )
}
export default App;
