import React, {useEffect, useState} from "react";
import Card from "./Card";


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

        const response = await fetch('https://cheapshark-game-deals.p.rapidapi.com/deals', options)
            // .then(response => response.json())

        setName(await response.json())
    }


    return (
        <div>
            <h1>All Game Deals</h1>
                {name.map((data, index) => {
                    return (
                        <Card
                            key={index}
                            title={data.title}
                            salePrice={data.salePrice}
                            normalPrice={data.normalPrice}
                            gameImg={data.thumb}
                        />
                    )
                })}
        </div>
    )



}

export default GameDeals;