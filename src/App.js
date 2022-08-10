import React from "react";
import "./css/styles.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
let module = require('./data.js');
let data = module.data;

export default function App() {
    const places = data.map((place) => {
        return (
            <Card
                key={place.id}
                place={place}
            />
        )
    })

    return (
        <div className="container">
            <Navbar />
            <section className="cards-container">
                {places}
            </section>
        </div>
    )
}
