import React, {useState, useEffect} from "react";
import './GameCarousel.css'

const GameCarousel = (props) => {
    const [data, setData] = useState([]);
    const {children} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

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
                    <div className="carousel-container" style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
                        <div className="carousel-wrapper">
                                <button onClick={prev} className="left-arrow">
                                    &lt;
                                </button>
                            <div className="carousel-content-wrapper">
                                    <button onClick={next} className="right-arrow">
                                        &gt;
                                    </button>
                                <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                    {children}
                                </div>
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