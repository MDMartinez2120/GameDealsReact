import React, {useState} from "react";
import Card from "../UI/Card/Card";

const GameList = () => {
    const [game, setGame] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env['REACT_APP_GAME_DEALS'],
            'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
        }
    };

    fetch('https://cheapshark-game-deals.p.rapidapi.com/games?title=batman&exact=0&limit=8', options)
        .then(response => response.json())
        .then(response => setGame(response))
        .catch(err => console.error(err));

    return (
        <div>
            {game.map(games => (
                <div>
                    <h4 className='game-title'>{games.external}</h4>
                    <img src={games.thumb} alt="thumbnail"/>
                </div>
            ))}
        </div>
    )

}

export default GameList;