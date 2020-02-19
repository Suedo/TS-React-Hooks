import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounterv2 from './components/HookCounterv2'

const App: React.FC = () => {
  return (
    <div className="App">
      Hello!
      <HookCounterv2></HookCounterv2>
    </div>
  )
}
export default App;
