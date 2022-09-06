import React from "react";
import "./Card.css";

export default function Card(props){
    return (
        <div className='container'>
            <div className="cards">
                <div className="card-data">
                    <div className="card-title-group">
                        <h5 className="card-title">{props.title}</h5>
                    </div>
                    <img className="card-img" src={props.gameImg} alt="game image"/>
                    <div className="card-game-prices">
                        <h5 className="game-deal">Sale Price: {'$' + props.salePrice}</h5>
                        <hr
                            style={{
                                background: 'lime',
                                color: 'lime',
                                borderColor: 'lime',
                                height: '3px',
                            }}
                        />
                        <h5 className="game-price-original">Normal Price: {'$' + props.normalPrice}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}