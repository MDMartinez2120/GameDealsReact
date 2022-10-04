import React from "react";
import './GameHeader.css'

function GameHeader(){
    return (
        <div className='header'>
            <h1>Game Deals</h1>
            <input type='search' id='game-search' name='s'/>
            <button>Search</button>
        </div>
    )
}

export default GameHeader;