import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HookName from './components/useState/HookName'
// import HookArray from './components/useState/HookArray'
// import HookMouse from './components/useEffect/HookMouse'
// import MouseContainer from './components/useEffect/MouseContainer'
// import IntervalCounter from './components/useEffect/IntervalCounter'
import DataFetching from './components/useEffect/DataFetching'


const App: React.FC = () => {
  return (
    <div className="App">
      Hello!
      <DataFetching />
    </div>
  )
}
export default App;
