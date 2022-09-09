import React, {useState, useEffect} from "react";
import Card from "./Card";

function GameSearch(){

    const API_KEY = process.env["REACT_APP_GAME_DEALS"];

    const [title, setTitle] = useState("");
    const [typedTitle, setTypedTitle] = useState("");
    const [name, setName] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        setTitle(typedTitle)
    }

    function setGameTitle(e){
        setTypedTitle(e.target.value);
        e.preventDefault();
    }

    useEffect(() => {
        gameSearch();
    }, [title])

    //GAME SEARCH BY NAME\\
    const gameSearch = async () => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
            }
        };

        const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?&sortBy=Price&title=${title}`, options)


        setName(await response.json())
    }

    return (
        <div className="GameSearch">
            <h3 className="pageHeader d-flex justify-content-center"> Search deals by Game</h3>
            <form className='d-flex justify-content-center' onSubmit={handleSubmit} >
                <input type="text" onChange={setGameTitle} autoComplete="off" placeholder="Search by Game" />
                <button type="submit" className="submitButton">Submit</button>
            </form>
            <div className="GameInfoContainer">
                <div>
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
            </div>
        </div>

    )




}

export default GameSearch;
