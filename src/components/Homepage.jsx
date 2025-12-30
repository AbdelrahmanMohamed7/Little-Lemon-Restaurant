import React from "react"
import logo_food from "../assets/restauranfood.jpg"
import { Link } from "react-router-dom"

function Homepage() {
    return (
        <main className="hero-grid">
            <h1>Welcome to Little Lemon</h1>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. From our hand-picked ingredients to our classic wood-fired oven, we bring the sun-drenched flavors of the coast right to the streets of Chicago.</p>
            <Link to="/booking" className="hero-button">
                Reserve a Table
            </Link>
            <img src={logo_food} alt="a food pic"/>
        </main>
    )
}

export default Homepage;