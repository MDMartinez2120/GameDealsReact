import React, {useState, useEffect} from "react";

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import GameList from "./components/Games/GameList";

function App() {

  return (
      <div>
        <MainHeader />
          <GameList />
      </div>
  );
}

export default App;
