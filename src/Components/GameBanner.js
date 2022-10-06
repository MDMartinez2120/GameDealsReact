import React, {useState, useEffect} from "react";
import './GameBanner.css'

const GameBanner = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_GAME_DEALS,
                'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
            }
        };

        fetch('https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&title&limit=3', options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    })

    return (
        <div className="slideshow">
            {data.map((game) => {
                return (
                    <div className='game-card'>
                        <h3 className='game-title'>{game.title}</h3>
                        <img className='game-image' src={game.thumb} alt="game-image" />
                        <h4 className='game-price'>Normal Price: {game.normalPrice}</h4>
                        <h4 className='game-sale-price'>Sale Price: {game.salePrice}</h4>
                        <h4 className='game-store'>Store: {game.storeID}</h4>
                    </div>
                )

            })}
        </div>
    );
}

export default GameBanner;