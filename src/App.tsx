import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookName from './components/HookName'
import HookArray from './components/HookArray'

const App: React.FC = () => {
  return (
    <div className="App">
      Hello!
      <HookName />
      <HookArray />
    </div>
  )
}
export default App;
