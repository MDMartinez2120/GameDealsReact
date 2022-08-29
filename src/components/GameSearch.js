import React, {useState, useEffect} from "react";

function GameSearch(){

    const [endPoint, setEndpoint] = useState();

    const [container, setContainer] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
    }

    const onChangeHandler = (e) => {
        setEndpoint(e.target.value);
    }

    const API_KEY = process.env["REACT_APP_GAME_DEALS "];

    useEffect(() => {
        fetchMe();
    }, [endPoint])

    const fetchMe = () => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
            }
        };

        fetch(`https://cheapshark-game-deals.p.rapidapi.com/games?id=+${endPoint}`, options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setContainer(data.cheapestPriceEver);
            })
            .catch(err => console.error(err));

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' value={endPoint} onChange={onChangeHandler}/>
                <button type='submit'>Search</button>
            </form>

            {container.map((item) => {
                return (<p>{item.cheapestPriceEver}</p>)
            })}
        </div>
    )







}

export default GameSearch;