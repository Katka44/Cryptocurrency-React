import React from 'react';
import Title from './Components/Title';
import Main from './Containers/Main';
import './styles/main.scss';

const App = () => (
  <div className="App">
    <Title
      size="h1"
      text="Crypto Dashboard" />
    <Main />
  </div>
);

export default App;
