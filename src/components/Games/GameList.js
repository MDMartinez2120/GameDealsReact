import React, {useState} from "react";
import './GameList.css';
import Card from "../UI/Card/Card";

const GameList = () => {
    const [game, setGame] = useState([]);
    const [topDeal, setTopDeal] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env['REACT_APP_GAME_DEALS'],
            'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
        }
    };

    fetch('https://cheapshark-game-deals.p.rapidapi.com/games?title=batman&exact=0&limit=10', options)
        .then(response => response.json())
        .then(response => setGame(response))
        .catch(err => console.log(err));

    const bestDeal = () => {
        //need to get highest dealRating
        let dDeals;
        dDeals = this.state.accounts

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env['REACT_APP_GAME_DEALS'],
                'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
            }
        };

        fetch('https://cheapshark-game-deals.p.rapidapi.com/deals', options)
            .then(deals => deals.json())
            .then(deals => console.log(deals))
            .catch(err => console.error(err));


    }

    return (
        <div className='card-container'>
            {game.map(games => (
                    <div className='game-cards'>
                        <img className='game-image' src={games.thumb} alt="game-image"/>
                            <div className="container">
                                <h4 className='game-title'><b>{games.external}</b></h4>
                                <p className='game-price'>{games.cheapest}</p>
                            </div>
                        {/*<h4 className='game-title'>{games.external}</h4>*/}
                        {/*<img className='game-image' src={games.thumb} alt="thumbnail"/>*/}
                        {/*<p className='game-price'>sale price: {games.cheapest}</p>*/}
                    </div>
            ))}
        </div>
    )

}

export default GameList;