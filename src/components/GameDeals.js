import React, {useEffect, useState} from "react";

function GameDeals(){

    const API_KEY = process.env["REACT_APP_GAME_DEALS"];

    const [name, setName] = useState([]);

    useEffect(() => {
        games()
    }, []);


    const games = async () => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
            }
        };

        const response = await fetch('https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&title=batman&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=60&exact=0&upperPrice=50&pageNumber=0&onSale=0&metacritic=0&storeID%5B0%5D=1%2C2%2C3', options)
            // .then(response => response.json())

        setName(await response.json())
    }


    return (
        <div>
            <h1>Game Deals</h1>
            <ol className='list-group list-group-numbered'>
                {name.map((data) => {
                    return (
                        <li className='list-group-item' key={data.id}> {data.title} </li>
                    )
                })}
            </ol>
        </div>
    )



}

export default GameDeals;