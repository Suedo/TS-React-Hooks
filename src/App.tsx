import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter'

const App: React.FC = () => {
  return (
    <div className="App">
      Hello!
      <HookCounter></HookCounter>
    </div>
  )
}
export default App;
