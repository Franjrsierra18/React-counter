import React from 'react';
import './App.css';
import Counter from './Counter';

const App = (props) => {
  return (
    <div className="App">
      
      <Counter init={77} incrementBy={10}/>
      <Counter init={2} incrementBy={8}/>

    </div>
  );
}

export default App;
