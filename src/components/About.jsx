import React from "react";
import logo_rest from "../assets/Restaurant.jpg"

function About() {
    return (
        <main className="about-grid">
            <h1>A Culinary Journey Since 2021</h1>
            <p>What started as a small family dream in the heart of the city has grown into a destination for food lovers. We take pride in sourcing the finest ingredients to recreate the tastes of our home. We believe that great food knows no borders, and we are honored to share our favorite Mediterranean flavors with every guest who walks through our doors.</p>
            <img src={logo_rest} alt="a photo for the restaurant"/>
        </main>
    )
}

export default About;