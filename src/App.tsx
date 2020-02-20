import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookName from './components/HookName'

const App: React.FC = () => {
  return (
    <div className="App">
      Hello!
      <HookName></HookName>
    </div>
  )
}
export default App;
