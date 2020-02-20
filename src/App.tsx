import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HookName from './components/useState/HookName'
// import HookArray from './components/useState/HookArray'
import HookMouse from './components/useEffect/HookMouse'

const App: React.FC = () => {
  return (
    <div className="App">
      Hello!
      <HookMouse />
    </div>
  )
}
export default App;
