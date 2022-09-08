import React from "react";
import "./GameStore.css"

export default function StoreCard(props){
    return (
        <div>
            <div className="store-cards col-md-6">
                <div className="card-inner" >
                    <div className="store-data">
                        <div className="card-title-group">
                            <h5 className="store-title">{props.storeName}</h5>
                        </div>
                        <hr
                            style={{
                                background: 'lime',
                                color: 'lime',
                                borderColor: 'lime',
                                height: '3px',
                            }}
                        />
                        <img className="store-image" src={props.images} alt="store picture"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
