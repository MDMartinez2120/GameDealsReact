import React, {useState, useEffect} from "react";
import './GameCarousel.css'

const GameCarousel = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_GAME_DEALS,
                'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
            }
        };

        fetch('https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&title=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=4&exact=0&upperPrice=50&pageNumber=0&onSale=0&metacritic=0&storeID%5B0%5D=1%2C2%2C3', options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    })

    return (
        <div className="slideshow">
            {data.map((game) => {
                return (
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={game.thumb} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={game.thumb} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={game.thumb} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                    // <div className='card-box'>
                    //     <div className='game-card'>
                    //         <div className='card-inner'>
                    //             <h3 className='game-title'>{game.title}</h3>
                    //             <img className='game-image' src={game.thumb} alt="game-image" />
                    //             <h4 className='game-price'>Normal Price: {game.normalPrice}</h4>
                    //             <h4 className='game-sale-price'>Sale Price: {game.salePrice}</h4>
                    //         </div>
                    //     </div>
                    // </div>
                )

            })}
        </div>
    );
}

export default GameCarousel;