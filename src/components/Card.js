import React from "react";
import "../css/styles.css";

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={`../img/${props.place.img}`} alt="card location" className="card-image"/>
            <div className="card-info">
                <div className="card-location_info">
                    <img src="../img/location-logo.png" alt="location icon" className="card-location_icon"/>
                    <span className="card-location">{props.place.location.toUpperCase()}</span>
                    <a className="card-link" href={props.place.link}><span>View in Google Maps</span></a>
                </div>
                <h1 className="card-title">{props.place.title}</h1>
                <span className="card-date">{props.place.startDate}{props.place.endDate ? ` - ${props.place.endDate}` :""}</span>
                <p className="card-description">{props.place.description}</p>
            </div>
        </div>
    )
}
