import React from "react";
import "./Card.css";

export default function Card(props){
    return (
        <div className="whole-card">
            <div className="card">
                <div className="card-title-group">
                    <h5 className="card-title">{props.title}</h5>
                </div>
                <img className="card-img" src={props.gameImg} alt="game image"/>
                <div className="card-game-prices">
                    <h5 className="game-deal">{props.salePrice}</h5>
                    <h5 className="game-price-original">{props.normalPrice}</h5>
                </div>
            </div>
        </div>
    )
}