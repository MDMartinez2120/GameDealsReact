import React, {useState, useEffect} from "react";
import GameDeals from "./GameDeals";

function GameSearch(){

    const API_KEY = process.env["REACT_APP_GAME_DEALS"];



}

export default GameSearch;

//
// const [title, setTitle] = useState("Red Dead Redemption");
// const [typedTitle, setTypedTitle] = useState("");
// const [arrayLength, setArrayLength] = useState();
// const [gameData, setGameData] = useState();
//
// function SetPrices(response){
//     setGameData(response.data);
//     setArrayLength(response.data.length);
// }
//
// useEffect(() => {
//     gameSearch().then(SetPrices);
// }, [title])
//
// function handleSubmit(e){
//     e.preventDefault();
//     setTitle(typedTitle)
// }
//
// function setGameTitle(e){
//     setTypedTitle(e.target.value);
//     e.preventDefault();
// }
//
// const gameSearch = async () => {
//
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': API_KEY,
//             'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
//         }
//     };
//
//     const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?&sortBy=Price&title=${title}`, options)
//
//
//     setGameTitle(await response.json())
//     console.log(gameData)
// }
//
// return (
//     <div className="GameSearch">
//         <h1 className="pageHeader"> Search deals by Game</h1>
//         <form onSubmit={handleSubmit} >
//             <input type="text" onChange={setGameTitle} autoComplete="off" placeholder="Search by Game Title" />
//             <button type="submit" className="submitButton">Submit</button>
//         </form>
//         <div className="GameInfoContainer">
//             {gameData.slice(0, arrayLength).map(function(gameNum, index){
//                 return(<GameDeals data={gameNum}  key={index} />)})}
//         </div>
//     </div>
//
// )