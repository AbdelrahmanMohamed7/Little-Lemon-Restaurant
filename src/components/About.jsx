import React from "react";
import logo_rest from "../assets/Restaurant.jpg"

function About() {
    return (
        <main className="about-grid">
            <h1>This Restaurant is established in 2021</h1>
            <p>We hope that we could share pur tastes with all the people all over the world</p>
            <img src={logo_rest} alt="a photo for the restaurant"/>
        </main>
    )
}

export default About;