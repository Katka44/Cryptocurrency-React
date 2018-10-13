import React from 'react';
import Title from './Components/Title';
import Main from './Containers/Main';
import './App.scss';

const App = () => (
  <div className="App">
    <Title
      size="h1"
      text="Crypto Dashboard" />
    <Main />
  </div>
);

export default App;
