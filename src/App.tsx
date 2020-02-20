import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HookName from './components/useState/HookName'
// import HookArray from './components/useState/HookArray'
import HookOne from './components/useEffect/HookOne'

const App: React.FC = () => {
  return (
    <div className="App">
      Hello!
      <HookOne />
    </div>
  )
}
export default App;
