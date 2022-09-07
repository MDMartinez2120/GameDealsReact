import React from "react";

export default function StoreCard(props){
    return (
        <div className='container'>
            <div className="store-cards">
                <div className="store-data">
                    <div className="card-title-group">
                        <h5 className="store-title">{props.storeName}</h5>
                    </div>
                    <img className="store-image" src={props.images.banner} alt="store image"/>
                </div>
            </div>
        </div>
    )
}
