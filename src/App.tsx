import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {TitleBar, ActivityPanelList} from './components/index';

const App: React.FC = () => {
  return (
    <div className="App">
      <TitleBar login="AndrewFrazer"/>
      <ActivityPanelList/>
    </div>
  );
}

export default App;
