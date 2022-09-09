import React from "react";
import "./GameStore.css"

export default function StoreCard(props){
    return (
        <div>
            <div className="store-cards d-flex flex-column col-lg-4 mb-4 w-100 justify-content-center">
                <div className="card-inner" >
                    <div className="store-data">
                        <div className="card-title-group">
                            <h5 className="store-title">{props.storeName}</h5>
                        </div>
                        <hr className='justify-content-center w-100'
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
