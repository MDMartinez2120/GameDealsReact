import React, {useState, useEffect} from "react";
import StoreCard from "./StoreCard";

function GameStores(){

    const API_KEY = process.env["REACT_APP_GAME_DEALS"];

    const [name, setName] = useState([]);
    const [image, setImage] = useState([]);

    useEffect(() => {
        stores()
    }, []);

    const stores = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
            }
        };

        const response = await fetch('https://cheapshark-game-deals.p.rapidapi.com/stores', options)

        setName(await response.json());
        // setImage(await response.json())
    }

    return (
        <div>
            {name.map((data, index) => {
                return (
                    <StoreCard
                        key={index}
                        storeName={data.storeName}
                        images={data.images.banner}
                    />
                )
            })}
        </div>
    )

}

export default GameStores;