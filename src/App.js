import React from 'react';
import Title from './Components/Title';
import Main from './Containers/Main';
import './App.css';

const App = () => (
  <div className="App">
    <Title
      size="h1"
      text="Cryptocurrency App" />
    <Main />
  </div>
);

export default App;
